const mysql = require('mysql');
const connProps = require('../resources/db-properties');

let conn = mysql.createConnection(connProps);

conn.connect(function (err) {
  if (err) throw err;
});

module.exports = conn;