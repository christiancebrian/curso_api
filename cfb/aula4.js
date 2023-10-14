// Método HTTP
const http = require('http')
// Método uso da porta local
const port = process.env.PORT


const server = http.createServer((resquest, response) => {
    response.statusCode = 200
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.end('Texto qualquer sendo enviado')
})

server.listen(port || 3000, console.log('Servidor Rodando'))