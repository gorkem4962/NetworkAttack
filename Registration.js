function createDatabase(){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./logindata.db');
    db.run(`
    CREATE TABLE IF NOT EXISTS logindata (
             firstname VARCHAR(20) NOT NULL,
             lastname VARCHAR(20)  NOT NULL,
             email VARCHAR(20) NOT NULL,
             password VARCHAR(20) NOT NULL,
             username VARCHAR(20) NOT NULL,
             PRIMARY KEY(username,password)
    )
    `, function(err, row) {
        if(err) {
            console.log(err.message);
        }
        console.log("entry added to table");
    });
    db.close();
}

function addData() {
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./logindata.db');
    console.log("BEFORE");
    let  firstname = "hhh"; // document.getElementById("first").value;
    let  lastname = "hhh"; //document.getElementById("last").value;
    let  email =  "hhh"; //document.getElementById("email").value;
    let password = "hhh"; // document.getElementById("password").value;
    let username = "hhh"; //document.getElementById("username").value;
    db.run('INSERT INTO logindata (firstname,lastname,email,password,username) VALUES (?,?,?,?,?)', [firstname,lastname,email,password,username],function(err, row) {
        if(err) {
            console.log(err.message);
        }
        console.log("entry added to table");
    });
    db.close();
}

function showdb(){
    const sqlite3 = require('sqlite3').verbose();
    let db = new sqlite3.Database('./logindata.db');
    db.all('SELECT * FROM logindata',[],(err,rows)=> {
        if(err) {
            console.log("ERROR");
            throw err;
        }
       rows.forEach((row)=>{
         console.log(row);
       });
    });
 db.close();
}

function print(){
    console.log("HELOLOOOOO");
}
