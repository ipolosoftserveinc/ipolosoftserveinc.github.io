const http = require('http');
const staticLib = require('node-static');
const file = new staticLib.Server('.');

function accept(req, res){
    if (req.url === '/books.json'){
        file.serve(req, res);
    } else {
        file.serve(req, res)
    }
}

http.createServer(accept).listen(8080);
console.log("Server running on port 8080");
