// Utilização do método 'http'
const http = require('http')
// Criando constante da porta
const port = 1771
// Criando a constante host
const host = '127.0.0.1'
// Criando o micro servidor
const server = http.createServer((request, response) => {
    // Cabeçalho de retorno
    response.writeHead(200, {
        'Content-Type': 'text/html'
    })
    // Criando rotas
    // Verificando se vem da raiz
    if (request.url == '/') {
        // Usando tags HTML por que informei que será este tipo de resposta no cabeçalho
        response.write('<h1>Seja bem vindo</h1>')
    } else if (request.url == '/canal') {
        response.write('<h1>Seja Bem vindo, porém está na pasta canal</h1>')
    }
    response.end()
})
// Colocando para escutar o servidor
server.listen(port, host, () => {
    console.log('Servidor rodando')
})