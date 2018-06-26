var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
  fs.readFile('input.txt',function(err,data){
  //fs.readFile('new_html.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write()
    var v = fs.readFileSync('input.txt');
    res.write(v.toString());
    res.write("\t \t \t \t");
    res.write(data);
    res.end();
  });
}).listen(8080);

console.log("Hello World");
