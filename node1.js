var http =  require("http");
http.createServer(function (request, response){
    response.writeHead(200, {"Content-Type":"text/html;charset= utf-8"});
    if (request.url !== "./favicon.ico") {
        response.write("go");
        response.end("");
    }
}).listen(888);