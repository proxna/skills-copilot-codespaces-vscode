// create web server

var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function (req, res) {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, function(err, data) {
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'});
      return res.end("404 Not Found");
    }  
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

// run the server using node comments.js
// open the browser and type http://localhost:8080/summer.html
// http://localhost:8080/winter.html
// http://localhost:8080/autumn.html
// http://localhost:8080/spring.html
// http://localhost:8080/summer.html