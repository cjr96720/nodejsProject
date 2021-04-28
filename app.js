// import modules
var http = require('http');
var express = require('express')
var path = require('path');
var routes = require('./routes/index.js');  // server side
var bodyParser = require('body-parser');

// set port number
var port = process.env.PORT || 3000;

var app = express()
var router = express.Router();
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));

//===== set url =====

routes(router);
app.use('/', router);

//===================

app.get('*', function(req, res){
	res.render('pages/error');
});


app.listen(port);
console.log(`server is listening on port ${port}`);