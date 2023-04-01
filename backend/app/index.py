from flask import Flask
import psycopg2
import json

app = Flask(__name__)

connection = psycopg2.connect(
  host= "db",
  port=5432,
  user="postgres",
  password="password",
  database="sample",
)

@app.route("/") 
def index():
  return "<h1>ああああ</h1>"

@app.route("/player") 
def player():
  with connection:
    with connection.cursor() as cursor:
      sql = "SELECT * FROM public.players"
      cursor.execute(sql)
      result = cursor.fetchall()
      print(result)
      result_json = json.dumps(result)
  return result_json

@app.route('/register', methods = ['POST'])
def create_player():
    # DBにアクセスしてプレイヤーを登録する処理
    
    return

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
