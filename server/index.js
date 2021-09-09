const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const usersRouter = require('./routes/users');

// make server object that contain port property and the value for our server.
var server = {
  port: 4040
};

// use the modules
app.use(cors())
app.use(bodyParser.json());
app.use('/users', usersRouter);

// starting the server
app.listen(server.port, () => console.log(`Server started, listening port: ${server.port}`));

db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'enigma_securities'
})