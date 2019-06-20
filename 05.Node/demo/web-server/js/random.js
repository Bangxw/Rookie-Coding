var http = require("http");
var url = require("url");
http.createServer(function(request,response){
	 response.writeHead(200, {"Content-Type": "text/plain"});
	 var params = url.parse(request.url, true).query;
     var input = params.number;
     var numInput = new Number(input);
     var numOutput = new Number(Math.random() * numInput).toFixed(0);
     response.writeLine("HELLO");
     response.write(numOutput);
     response.end();
}).listen(80);
console.log("Random Number Generator Running...");