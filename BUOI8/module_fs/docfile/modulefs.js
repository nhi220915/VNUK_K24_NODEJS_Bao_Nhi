// fs: file system
// khai bao su dung module http
var http = require('http');
// khai bao su dung module fs
var fs = require('fs');
// khoi tao server chay cong 8080
http.createServer(function(req, res) {
    // dinh dang response head tra ve
    res.writeHead('200', {'content-type': 'text/html'});
    // doc file code html encode utf8
    fs.readFile('../docfile/docfilehtml.html', 'utf8', function (err, data) {
        if (err) throw err;
        // in ra noi dung doc duoc
        res.write(data);
        // ket thuc response
        res.end();
    });
}).listen(8081);