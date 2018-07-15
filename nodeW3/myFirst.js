var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('A lot of People are using nodes, so I am starting to study it :)');
}).listen(8080);