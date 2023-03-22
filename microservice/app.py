from flask import Flask
import psycopg2
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = psycopg2.connect("postgres://rajashree:rajashree@localhost:5433/psu_foodcarts") 
    return conn

@app.route("/reviews/<id>", methods=['GET'])
@cross_origin()
def get_reviews(id):
    conn = get_db_connection()

    # create a cursor
    cur = conn.cursor()
  
    # Select all products from the table
    cur.execute('SELECT "reviews"."id", "reviews"."text", "reviews"."rating", "users"."id", "users"."name" '
                'FROM reviews '
                'INNER JOIN users ON "reviews"."userId" = "users"."id" '
                'WHERE "reviews"."foodcartId" = ' + id)

    # Fetch the data
    data = cur.fetchall()
  
    # close the cursor and connection
    cur.close()
    conn.close()

    return {"reviews": data}


if __name__ == '__main__':
    app.debug = True
    app.run()
