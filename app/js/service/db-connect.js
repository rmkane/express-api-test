import mysql from 'mysql';
import connProps from '../../resources/db-properties';
import TaskController from "../controller/task";

let conn = mysql.createConnection(connProps);

conn.connect(function (err) {
  if (err) throw err;
});

export default conn;