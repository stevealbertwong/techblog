/*

“Listing 18.2 express_routes.js: Implementing route parameters in Express”

Excerpt From: Brad Dayley. “Node.js, MongoDB, and AngularJS Web Development (Developer's Library).” iBooks. 
*/

var express = require("express");
var bodyParser = require("body-parser");
var url = require("url");
var http = require("http");
// var mongoose = require("mongoose");


// Schema = mongoose.Schema;

var app = express();
http.createServer(app).listen(8080, function(){
	console.log("Listing on port 8080");
});

// http.createServer(app).listen(process.env.PORT, function(){
// 	console.log("Listening on port process.env.PORT");
// });

// mongoose.connect(process.env.MONGOLAB_URI || "mongo://localhost:27017/test")


app.use(bodyParser.json());
app.use('/', express.static('./static'))
// app.use('/', express.static('./static_test'))

var savedPosts = [];

app.get("/hello", function(req,res){
	res.send("Hello world");
});

app.get("/helloarray", function(req,res,next){
	var helloarr = ["hello world 1", "hello world 2"];
	var helloobject = {hello :"world"};
	res.send(helloobject);
});

app.post('/blogpost/add', function(req, res, next){
	savedPosts.push(req.body.content);
	console.log(savedPosts);
	res.send();
});

app.get('/blogpost', function(req, res, next){	
	res.send(savedPosts);
});




// Query String e.g. /find?author=steven&title=ilovesunshine

// app.get("/find", function(req, res){
// 	var url = url.parse(req.url, true); // this method does not exist in url library
// 	var query = url.query;
// 	var response = query.author;
// 	// res.send("response" + req.originalUrl);
// 	console.log(response);
// });

// // defined parameters
// app.get('/user/:userid', function(req, res){
// 	var response = req.param('userid');
// 	res.send(response);
// })


// // Common properties and methods of request object
// app.get('/requestobject/:number', function(req, res){
	
// 	var url = req.originalUrl;
// 	var protocol = req.protocol;
// 	var query = JSON.stringify(req.query);
// 	var headers = JSON.stringify(req.headers, null, 2);// { "host": "localhost:8080", "connection": "keep-alive", "cache-control": "max-age=0", "upgrade-insecure-requests": "1", "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36", "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8", "accept-encoding": "gzip, deflate, sdch", "accept-language": "en-US,en;q=0.8,zh-TW;q=0.6,zh;q=0.4,zh-CN;q=0.2,ja;q=0.2,ms;q=0.2", "if-none-match": "W/\"19-1Wrk436unT1676oNXQSlbg\"" }
// 	res.send(url + protocol + query + headers);
	
// })
