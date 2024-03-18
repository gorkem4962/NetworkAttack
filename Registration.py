import sqlite3
import hashlib

conn = sqlite3.connect("logindata.db")
cur = conn.cursor()

# cur.execute("""
# CREATE TABLE IF NOT EXISTS logindata (
         #firstname VARCHAR(20) NOT NULL,
         #lastname VARCHAR(20)  NOT NULL,
         #email VARCHAR(20) NOT NULL,
         #password VARCHAR(20) NOT NULL,
         #username VARCHAR(20) NOT NULL,
         #PRIMARY KEY(username,password)
#)
#""")

firstname1, lastname1, email1, password1,username1 = "Max", "Mustermann", "musterm@gnail.com", hashlib.sha256("123456".encode()).hexdigest(),"gxeijeid"
cur.execute("INSERT INTO logindata (firstname, lastname, email, password,username) VALUES (?, ?, ?, ?,?)", (firstname1, lastname1, email1, password1,username1))

conn.commit()
cur.execute("SELECT * FROM logindata")
rows = cur.fetchall()
for row in rows:
    print(row)
