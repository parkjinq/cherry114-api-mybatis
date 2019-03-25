const mysql2 = require('mysql2');

const conn = mysql2.createPool({
    host: 'localhost',
    user: 'hbstudent',
    password: 'hbstudent',
    database: 'cherry114',
    connectionLimit : 20
})

module.exports = {conn}