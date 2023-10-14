// Site com dicas dos códigos de status http.cat

// Criando acesso ao módulo HTTP
const http = require('http')


// Criando nosso micro servidor
http.createServer((request, response) => {
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write('Christian Cebrian\nCurso CFB aulas de API')
    response.end()
}).listen(1337)
// Agora para ativar, basta abrir o terminal e até a pasta que se encontra este arquivo e digitar 'node aula2.js', e estara com a escuta ativa na porta definida que para acessar é 'http://localhost:1337/
// Para parar o servidor, com o terminal selecionado, click 'control+c' e voltara ao normal