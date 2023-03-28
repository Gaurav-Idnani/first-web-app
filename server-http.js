'use strict'

const http = require('http');
const path= require('path');
const port = process.env.PORT || 5000; // if no port set then 5000 set as default
const filePath=path.resolve ('','sessions.json');
console.log ('filePath=',filePath);
const sessions = require (filePath);
const server = http.createServer((req,res)=>{
        if (req.url == '/'){
            res.writeHead(200, { 'Content-Type':'text/html'} );
            res.write('<h1>Hello salesforce</h1>');
            res.write('<p>Check doc for create server</p>');
        } else if (req.url ==='/api/sessions'){
            res.writeHead(200, {'Content-Type':'application/json'});
            res.write (JSON.stringify(sessions,null,2));
        } else {
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.write (`404: Not Found:${req.url}`);
        }
    res.end();
});

server.listen(port, ()=>{
    console.log ('server is running on',port);
})