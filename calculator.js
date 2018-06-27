var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(express.static('public'));
app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
})

app.post('/process_post', urlencodedParser, function (req, res) {
   // Prepare output in JSON format
   var sum,product,diff,div;
   /*response = {
      first_num:req.body.first_num,
      second_num:req.body.second_num
   };*/
   if(req.body.op=='+'){
   response = {
     sum: parseInt(req.body.first_num) + parseInt(req.body.second_num)
   };}
   else if(req.body.op=='*'){
   response = {
     product: parseInt(req.body.first_num) * parseInt(req.body.second_num)
   };}
   else if(req.body.op=='-'){
   response = {
     diff: parseInt(req.body.first_num) - parseInt(req.body.second_num)
   };}
   else if(req.body.op=='/'){
   response = {
     div: parseInt(req.body.first_num) / parseInt(req.body.second_num)
   };}
   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port

   console.log("Example app listening at http://%s:%s", host, port)

})
