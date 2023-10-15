// Criando constante com o Express instalado
const express = require('express')

// Criando uma instancia do Express
const app = express()

// Fazendo com que o Express trate todas requizões no modo JSON
app.use(express.json())

// Criando identificação da porta usada pelo APP
const port = process.env.PORT

// Módulo URL
//const url = require('url')

// Criando a rota local de acesso ao API na porta 3000 - http://localhost:3000/
// Método via GET
// Aplicação dispónivel na pasta 'projects'

// Criando a rota para GET (Pega informações) na rota '/projects'
app.get('/projects', function (request, response) {
    // Retornando dados texto ou HTML
    // return response.send('Texto encaminhado de resposta')

    // Retornando dados JSON
    // return response.json([
    //     'Projeto 1',
    //     'Projeto 2'
    // ])

    // Retornado com parametros
    const query = request.query
    // const {nome, idade} = request.query // Assim, cada nome de propriedade vira uma variavel com o valor de acordo com o mesmo
    console.log(query)

    return response.json({
        msg1: 'Mensagem 1',
        msg2: 'Mensagem 2',
        nome: query.nome,
        idade: query.idade
    })
})

// Criando a rota para POST (Envia informações) na rota '/projects'
app.post('/projects', function (request, response) {
    // Nesta parte fica o processo de conexão e envio ao banco de dados e tratamento da resposta
    // Caso abaixo seria o retorno da criação do 'Projeto 3'
    // return response.json([
    //     'Projeto 1',
    //     'Projeto 2',
    //     'Projeto 3'
    // ])

    // Recebendo os dados via 'body' no corpo do site
    // const { id, nome } = request.body
    // console.log(id + ' - ' + nome)
    const body = request.body
    console.log(body)
    return response.json({
        cod: 01,
        message: 'Registrado com sucesso'
    })
})

// Criando a rota para PUT (Envia informações para atualizar o registro por completo) na rota '/projects/:id'
// Quando se quer mais de uma variavel, basta adicionar '/' e outro nome. Exemplo '/projects/:id/:nome', assim temos as variaveis 'id' e 'nome'
app.put('/projects/:id/:data', function (request, response) {
    // Nesta parte fica o processo de conexão e envio ao banco de dados e tratamento da resposta
    // Caso abaixo seria o retorno da criação do 'Projeto 3'

    // Pegando valores pelo parametros via recuros (rota)
    const { id, data } = request.params
    return response.json([
        'Projeto 4',
        'Projeto 2',
        'Projeto 3',
        id,
        data
    ])
})

// Criando a rota para PATCH (Envia informações para atualizar o registro por campos selecionados) na rota '/projects'
app.patch('/projects', function (request, response) {
    // Nesta parte fica o processo de conexão e envio ao banco de dados e tratamento da resposta
    // Caso abaixo seria o retorno da criação do 'Projeto 3'
    return response.json([
        'Projeto 1',
        'Projeto 2',
        'Projeto 3'
    ])
})

// Criando a rota para DELETE (Exclui o registro) na rota '/projects'
app.delete('/projects/:id', function (request, response) {
    // Nesta parte fica o processo de conexão e envio ao banco de dados e tratamento da resposta
    // Caso abaixo seria o retorno da criação do 'Projeto 3'
    return response.json([
        'Projeto 2',
        'Projeto 3'
    ])
})

// Criando a escuta
app.listen(port || 3000, () => {
    console.log('Servidor Rodando -> PORT: ' + port + ' 📡')
})