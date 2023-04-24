from flask import Flask, request
import psycopg2
import json
import pandas as pd
from psycopg2.extras import execute_values


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
        with connection.cursor() as cursor:
            sql = "SELECT* FROM public.players"
            df = pd.read_sql(sql=sql, con=connection)
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
            sql = "INSERT INTO public.players(name) VALUES (%s)"
            cursor.execute(sql, [name])
            connection.commit()
            result_json = json.dumps({"result": "ok"})
            print(result_json)
    return result_json


@app.route("/match/register", methods=["POST"])
def create_match():
    data = request.data.decode("utf-8")
    data = json.loads(data)
    serveData = data[0]["serveData"]
    gameNumber = data[1]["gameNumber"]
    pointOrMissData = data[2]["pointOrMissData"]

    insertServeData = []
    insertGameNoData = []
    insertPointOrMissData = []

    print(pointOrMissData)

    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SET timezone = 'Asia/Tokyo';")
            sql_match = (
                "INSERT INTO public.matches(date)VALUES (CURRENT_DATE) RETURNING id"
            )
            df = pd.read_sql(sql=sql_match, con=connection)
            results = df.to_dict(orient="records")
            match_id = results[0]["id"]

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

    return {"result": "OK"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
