//Create web server
//Create a web server that listens on port 3000 and responds with the following content: "Hello, World!" when the path is /hello and "Goodbye, World!" when the path is /goodbye.
//For all other paths, the server should respond with a 404 error code and the following content: "404 Not Found".
//Import the http module
const http = require('http');

//Create a web server
const server = http.createServer((req, res) => {
  //Get the path
  const path = req.url;
  //Check the path
  if (path === '/hello') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!');
  } else if (path === '/goodbye') {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Goodbye, World!');
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 Not Found');
  }
});

//Listen on port 3000
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});