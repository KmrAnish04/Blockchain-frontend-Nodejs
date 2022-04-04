const http = require('http');
const files = require('fs')


const server = http.createServer((req, res) => {
    
    console.log(req.url, req.method);
    // console.log(req);
    // const path='./views/';

    // res.setHeader('Content-Type', 'text/html');

    // files.readFile('./views/about.html', (err, datas) => {
    //     if(err){
    //         console.log(err);
    //         res.end();
    //     }
    //     else{
    //         res.write(datas);
    //         res.end();
    //     }
    // })
    // res.write(/views/about.html);
    // res.end();

});

server.listen(5500, 'localhost', () => {
    console.group('listening requests on me from port 8000');
});

// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log('request made');
// });

// // localhost is the default value for 2nd argument
// server.listen(8000, 'localhost', () => {
//   console.log('listening for requests on port 8000');
// });

// Load HTTP module
// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 8000;

// // Create HTTP server
// const server = http.createServer(function(req, res) {

//    // Set the response HTTP header with HTTP status and Content type
//    res.writeHead(200, {'Content-Type': 'text/plain'});

//    // Send the response body "Hello World"
//    res.end('Hello World\n');
// });

// // Prints a log once the server starts listening
// server.listen(port, hostname, function() {
//    console.log(`Server running at http://${hostname}:${port}/`);
// })