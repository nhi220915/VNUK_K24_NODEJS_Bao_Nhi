var http = require('http') // 'http': ten module
http.createServer(function (req, res) { // trong createserver co 1 ham ao; req: request ; res: respond
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World');
}) .listen(8080);