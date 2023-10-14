const http = require('http')
// Módulo para acesso e modificação de arquivos
const fs = require('fs')

const porta = process.env.PORT

const server = http.createServer((request, response) => {
    fs.appendFile('texte.txt', 'Texto dentro do arquivo a ser criado.', (err) => {
        if (err) throw err
        console.log('Arquivo Criado')
        response.end()
    })
})

server.listen(porta || 3000, () => {
    console.log('Servidor rodando!')
})