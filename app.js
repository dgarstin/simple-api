var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin","http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	res.header("Access-Control-Allow-Credentials", "true");
  next();
});

var routes = require('./app/routes/routes.js')(app);

var server = app.listen(3333, function(){
	console.log("Listening on port %s...",server.address().port);
});
