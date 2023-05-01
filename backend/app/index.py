from flask import Flask, request
import psycopg2
import json
import pandas as pd
from psycopg2.extras import execute_values
from datetime import date

app = Flask(__name__)
app.config["JSON_AS_ASCII"] = False

connection = psycopg2.connect(
    host="db",
    port=5432,
    user="postgres",
    password="password",
    database="sample",
)


@app.route("/player")
def player():
    with connection:
        sql_player = "SELECT* FROM public.players"
        df = pd.read_sql(sql=sql_player, con=connection)
        results = df.to_dict(orient="records")
    return results


@app.route("/player/register", methods=["POST"])
def create_player():
    data = request.data.decode("utf-8")
    data = json.loads(data)
    name = data["name"]
    # DBにアクセスしてプレイヤーを登録する処理
    with connection:
        with connection.cursor() as cursor:
            sql_player_register = "INSERT INTO public.players(name) VALUES (%s)"
            cursor.execute(sql_player_register, [name])
            connection.commit()
            result_json = json.dumps({"result": "ok"})
            print(result_json)
    return result_json


@app.route("/match")
def match():
    with connection:
        sql_match = "SELECT* FROM public.matches ORDER BY id DESC"
        df = pd.read_sql(sql=sql_match, con=connection)
        results = df.to_dict(orient="records")
    return results


def get_match_detail(match_ID, gameNo, isPoint, player):
    query = f"SELECT (game_number,pointmiss_order,serve,shot_type,fore_back,course,poach_volley_course,miss_result,rally_count)FROM public.points_misses JOIN game_players ON public.points_misses.match_id = public.game_players.match_id WHERE public.points_misses.match_id = {match_ID} AND public.points_misses.game_number = {gameNo} AND public.points_misses.ispoint = {isPoint} AND public.game_players.player_number = {player}  ORDER BY public.points_misses.pointmiss_order ASC"
    return query


@app.route("/match/<int:match_id>")
def match_detail(match_id):
    with connection:
        with connection.cursor() as cursor:
            sql_game_number = f"SELECT DISTINCT game_number FROM public.points_misses WHERE match_id = {match_id}"
            df = pd.read_sql(sql=sql_game_number, con=connection)
            game_number_list = df.to_dict(orient="records")

            array = []
            game_object = {
                "player1": {"ポイント": [], "ミス": []},
                "player2": {"ポイント": [], "ミス": []},
            }
            game_player_list = ["player1", "player2"]

            for game_number in game_number_list:
                gameNo = game_number["game_number"]

                for game_player in game_player_list:
                    df = pd.read_sql(
                        sql=get_match_detail(match_id, gameNo, True, game_player),
                        con=connection,
                    )
                    point_list = df.to_dict(orient="records")
                    df = pd.read_sql(
                        sql=get_match_detail(match_id, gameNo, False, game_player),
                        con=connection,
                    )
                    miss_list = df.to_dict(orient="records")

                    game_object[game_player]["ポイント"].append(point_list)
                    game_object[game_player]["ミス"].append(miss_list)
                    array.append(game_object)

        print(game_bject)

    return array


@app.route("/match/register", methods=["POST"])
def create_match():
    data = request.data.decode("utf-8")
    data = json.loads(data)
    matchTitle = data[0]["matchTitle"]
    serveData = data[1]["serveData"]
    gameNumber = data[2]["gameNumber"]
    pointOrMissData = data[3]["pointOrMissData"]
    gamePlayerList = data[4]["gamePlayerList"]
    current_date = date.today()
    insertServeData = []
    insertGameNoData = []
    insertPointOrMissData = []
    insertGamePlayerList = []

    with connection:
        with connection.cursor() as cursor:
            sql_match_register = (
                "INSERT INTO public.matches (date, title)VALUES (%s, %s) RETURNING id"
            )
            cursor.execute(sql_match_register, (current_date, matchTitle))
            match_id = cursor.fetchone()[0]

            # サーブデータ
            for item in serveData:
                row = (match_id, item["playerId"], item["isFirst"])
                insertServeData.append(row)
            sql_serveData = (
                "INSERT INTO public.serves (match_id, player_id, isfirst)VALUES %s"
            )
            execute_values(cursor, sql_serveData, insertServeData)

            # ゲームの数
            for item in gameNumber:
                row = (item, match_id)
                insertGameNoData.append(row)
            sql_gameNoData = (
                "INSERT INTO public.games (game_number, match_id) VALUES %s"
            )
            execute_values(cursor, sql_gameNoData, insertGameNoData)

            # ポイントミスデータ
            for item in pointOrMissData:
                row = (
                    match_id,
                    item["gameNo"],
                    item["player_id"],
                    item["isPoint"],
                    item["order"],
                    item["serve"],
                    item["shotType"],
                    item["foreOrBack"],
                    item["course"],
                    item["poachVolleyCourse"],
                    item["missResult"],
                    item["rallyCount"],
                )
                insertPointOrMissData.append(row)
            sql_pointOrMissData = "INSERT INTO public.points_misses (match_id,game_number, player_id, ispoint, pointmiss_order, serve, shot_type, fore_back, course, poach_volley_course, miss_result,rally_count) VALUES %s"
            execute_values(cursor, sql_pointOrMissData, insertPointOrMissData)

            # ゲームプレイヤー
            for item in gamePlayerList:
                row = (match_id, item["player_id"], item["playerNo"])
                insertGamePlayerList.append(row)
            sql_gamePlayerList = "INSERT INTO public.game_players (match_id,player_id, player_number) VALUES %s"
            execute_values(cursor, sql_gamePlayerList, insertGamePlayerList)

    return {"result": "OK"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
