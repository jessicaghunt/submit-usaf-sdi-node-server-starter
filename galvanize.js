const http = require('http');

const PORT = 3001; 
  const server = http.createServer((request, response) => {
        if (request.method === 'GET') {
            response.end("Hello, Galvanize!");
            return;
            }
        }
    );
    
    // Start the server and listen on PORT
    server.listen(3001, "localhost", () => {
      console.log(`Server running at http://localhost:3001/`);
    });