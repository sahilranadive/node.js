var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer(function(req,res){
  var pathname = url.parse(req.url).pathname;
  console.log("request for pathname: "+pathname);
  fs.readFile(pathname.substr(1),function(err,data){
    res.writeHead('200',{'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(8081);

//console.log('Server running at http://127.0.0.1:8081/');
