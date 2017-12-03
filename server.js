var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'text/html'});
   
   response.write('Hello World, my name is Arash');
   
}).listen(8001);
