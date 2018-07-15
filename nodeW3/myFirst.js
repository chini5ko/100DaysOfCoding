var http = require('http');
var dt = require('./myFirstModule');
var nm = require('./mySecModule');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write("<br>");
    res.end("My name is :" + nm.myName());
}).listen(8080);


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("This is another server 5050  :");
    res.write("<br>");
    res.end("My name is :" + nm.myName());
}).listen(5050);

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(7070);