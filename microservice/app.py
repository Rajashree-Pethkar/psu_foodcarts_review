from flask import Flask
import psycopg2
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

def get_db_connection():
    conn = psycopg2.connect("postgres://rajashree:rajashree@localhost:5433/psu_foodcarts") 
    return conn

@app.route("/reviews/<id>", methods=['GET'])
def get_reviews(id):
    conn = get_db_connection()

    # create a cursor
    cur = conn.cursor()
  
    # Select all products from the table
    cur.execute('SELECT * FROM reviews WHERE "foodcartId" = ' + id)
#     cur.execute('SELECT r.id, r.text, r.rating, u.id, u.name FROM reviews r '
#     'INNER JOIN users u '
#     'ON "r.userId" = "u.id" '
#    'WHERE "r.foodcartId" = ' + id)

    # Fetch the data
    data = cur.fetchall()
    
    cur.execute('SELECT * FROM users')

    users = cur.fetchall()
  
    # close the cursor and connection
    cur.close()
    conn.close()

    return {"results": data}


if __name__ == '__main__':
    app.debug = True
    app.run()
