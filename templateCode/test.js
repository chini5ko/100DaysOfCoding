const newHtml = require("templateCode");
var http = require('http');

//newHtml();
//http://localhost:8080

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write("This is another server 8080  :");
    res.write("<br>");
    newHtml();
    res.end("My name is :" + "Chinisko");
}).listen(5050);
