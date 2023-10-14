// Criando constante com o Express instalado
const express = require('express')

// Criando uma instancia do Express
const app = express()

// Criando identificação da porta usada pelo APP
const port = process.env.PORT

// Módulo URL
//const url = require('url')

// Criando a rota local de acesso ao API na porta 3000 - http://localhost:3000/
// Método via GET
// Aplicação dispónivel na pasta 'projects'

// Criando a rota para GET na raiz do servidor
app.get('/', function (request, response) {
    // Send com text/plain
    // return response.send('Olá mundo!')
    // Send com JSon
    return response.json({
        mensagem: 'Olá, seja bem vindo',
        nome: 'Christian',
        sobrenome: 'Cebrian',
        idade: 38,
        cpf: '00011122255'
    })
})

// Criando a escuta
app.listen(port || 3000, () => {
    console.log('Servidor Rodando -> PORT: ' + port + ' 📡')
})