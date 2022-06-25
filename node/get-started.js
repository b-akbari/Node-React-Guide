const http = require('http');

let server = http.createServer(function(request,response){
    let body = 'WOW! Thats some good coffee!';

    response.writeHead(200,{
        'content-length': body.length,
        'content-type': 'text/plain'
    })
    response.end(body);
});

server.listen(4000)