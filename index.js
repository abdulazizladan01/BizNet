/*const http = require('http');
var mysql = require('mysql');

const user_routes = require('./routes/user.js');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "2wo1ne8ight"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
*/

require("dotenv").config();
const express = require("express");
const app = express();
app.get("/api", (req, res) => {
	res.json({
		success : 1,
		message : "This api WORKS!"
	});
});

app.listen(process.env.APP_PORT, () => {
	console.log("Server is up and running on port : ", process.env.APP_PORT);
});
