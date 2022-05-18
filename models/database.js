const sql = require('mysql')

var server = sql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'mydb'
})

module.exports = server