const express = require('express')
const app = express()
const PORT = 3000
const APPLICATION = 'app';
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database:'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)
let pessoas = ''

connection.query(`SELECT name FROM people`, null,function (err, result, fields) {
    if (err) throw err;
    result.forEach(it => {
         pessoas = pessoas.concat("<h1>" + it.name + "</h1>");
    })
})
connection.end()

app.get('/', (req,res) => {
    let hmtl = '<h1>Full Cycle Rocks!</h1>' + pessoas
    res.send(hmtl)
})

app.listen(PORT, () =>{
    console.log(`LISTEN ${APPLICATION} PORT 3000`)
})
