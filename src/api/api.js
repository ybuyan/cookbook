const express = require('express');
const app = express();
const port = 3000;
// const mysql = require('mysql')
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'test'
// });
// connection.connect();

// connection.query('select * from user', (error, results, fields) => {
//     if(error) {
//         console.log(error)
//     } else {
//         console.log('results', results);
//         console.log('fields', fields);
//     }
// })

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: 'test'
    }
})
knex('user').select('name').where('name', 'like', '%i%').then(res => {
    console.log(res);
})
knex('user').select().then(res => {
    console.log(res)
})

app.get('/info', (req, res) => {
    res.send({
        'name': 'jake',
        'age': 18
    })
})
// connection.end();
app.listen(port, ()=>console.log('服务开启了'))