from flask import Flask
import psycopg2

app = Flask(__name__)

def get_db_connection():
    conn = psycopg2.connect("postgres://rajashree:rajashree@localhost:5433/psu_foodcarts") 
    return conn

@app.route("/")
def get_reviews():
    conn = get_db_connection()

    # create a cursor
    cur = conn.cursor()
  
    # Select all products from the table
    cur.execute('''SELECT * FROM reviews''')
  
    # Fetch the data
    data = cur.fetchall()
  
    # close the cursor and connection
    cur.close()
    conn.close()

    return {"results": data}
