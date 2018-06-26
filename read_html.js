var http = require('http');
var fs = require('fs');
var writeStream = fs.createWriteStream('output.txt');
var v = fs.readFileSync('input.txt');
writeStream.write(v.toString(),'UTF8');
//writeStream.end();
writeStream.on('error', function(err){
console.log(err.stack);
});

http.createServer(function(req,res){
  fs.readFile('input.txt',function(err,data){
  //fs.readFile('new_html.html',function(err,data){
    res.writeHead(200,{'Content-Type':'text/html'});
    //res.write()

    res.write(data.toString());
    //res.write("\t \t \t \t");
  //  res.write(data);
    res.end();
  });
}).listen(8080);

console.log("Hello World");
