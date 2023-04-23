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
            # print(result_json)
    return result_json


@app.route("/match/register", methods=["POST"])
def create_match():
    data = request.data.decode("utf-8")
    data = json.loads(data)
    insert_match_List = []

    with connection:
        with connection.cursor() as cursor:
            cursor.execute("SET timezone = 'Asia/Tokyo';")
            sql1 = "INSERT INTO public.matches(date)VALUES (CURRENT_DATE) RETURNING match_id"
            df = pd.read_sql(sql=sql1, con=connection)
            results = df.to_dict(orient="records")
            match_id = results[0]["match_id"]

            for item in data:
                row = (match_id, item["playerId"], item["isFirst"])
                insert_match_List.append(row)

            sql2 = "INSERT INTO public.serves (match_id, player_id, isfirst)VALUES %s"
            execute_values(cursor, sql2, insert_match_List)

    return {"result": "OK"}


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
