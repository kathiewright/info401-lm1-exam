// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/listview.html", function (request, response) {
  response.sendFile(__dirname + '/public/listview.html');
});

app.get("/panel.html", function (request, response) {
  response.sendFile(__dirname + '/public/panel.html');
});

app.get("/form.html", function (request, response) {
  response.sendFile(__dirname + '/public/form.html');
});

//IMPORTANT!  Note that I am using the POST method instead of the GET method for this one....
app.post("/echo.html", function (request, response) {
  response.sendFile(__dirname + '/public/echo.html');
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

