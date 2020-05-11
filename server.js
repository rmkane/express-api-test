import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import TaskRoutes from './app/js/routes/task';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});
new TaskRoutes().register(app, __dirname);

app.listen(port);
console.log('API server started on: ' + port);