import http from 'http';
import os from "os";
import path from "path";
import {hello} from "./personalModule";
const newLine = '<br></br>';

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end(
        `System user name: ${os.userInfo().username} | ` + newLine +
        `OS: ${os.type()} | ` + newLine +
        `OS work time: ${os.uptime() / 60} minutes | ` + newLine +
        `Server file path: ${path.relative('./Lesson_10_HW', 'server.js')}` + newLine +
        hello(os.userInfo().username)
    );
}).listen(5000);
console.log('Server running at http://localhost:5000');