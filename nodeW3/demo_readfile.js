var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('demofile1.html', function(err, fileData) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(fileData);
    res.end();
  });
}).listen(8080);