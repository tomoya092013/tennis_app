from flask import Flask, request, jsonify
import psycopg2
import json
import pandas as pd


app = Flask(__name__)
app.config['JSON_AS_ASCII'] = False

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
            results = df.to_dict(orient='records')
        # print(results)
        # print(jsonify(results))
    return results


@app.route('/player/register', methods=['POST'])
def create_player():
    data = request.data.decode('utf-8')
    data = json.loads(data)
    print(data)
    name = data['name']
    print(name)
    # DBにアクセスしてプレイヤーを登録する処理
    with connection:
        with connection.cursor() as cursor:
            sql = "INSERT INTO public.players(name) VALUES (%s)"
            cursor.execute(sql, [name])
            connection.commit()
            result_json = json.dumps({'result': 'ok'})
            print(result_json)
    return result_json


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
