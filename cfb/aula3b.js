// Utilização do método 'http'
const http = require('http')
// Utilizando método 'url'
const url = require('url')
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
    // Vai retornar o endereço de onde veio o pedido
    response.write(request.url)
    //
    const p = url.parse(request.url, true).query
    response.write('<br>' + p.nome)
    response.write('<br>' + p.sobrenome)

    response.end()
})
// Colocando para escutar o servidor
server.listen(port, host, () => {
    console.log('Servidor rodando')
})