const http = require('http')

const server = http.createServer((request, response) => {
  console.log(request.headers)
  response.setHeader('Content-Type', 'text/html')
  response.write("Hello World!")
  response.end()
})

server.listen(7999)