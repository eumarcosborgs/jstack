const http = require('http');
const { URL } = require('url') 

const routes = require('./routes')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`)
  
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    route.handler(request, response);
  } else {
    response.end(`Cannot ${request.method} ${request.url}`);
  }
})

server.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
})