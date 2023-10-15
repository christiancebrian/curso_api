// Criando constante com o Express instalado
const express = require('express')
// Usando o UUID (Universal Único Identificador ID) cria um ID único no mundo
const { v4: uuidv4 } = require('uuid');
// Criando uma instancia do Express
const app = express()
// Fazendo com que o Express trate todas requizões no modo JSON
app.use(express.json())
// Criando identificação da porta usada pelo APP
const port = process.env.PORT
// Array com valores enviados
const projects = []


app.get('/projects', function (request, response) {
    return response.json(projects)
})


app.post('/projects', function (request, response) {
    // Pegando JSON enviado de formulário no site
    const { nome, idade } = request.body
    // Criando Array com os dados enviados
    const project = {
        id: uuidv4(),
        nome,
        idade
    }
    // Passando a Array para Array Universal
    projects.push(project)
    // Retornando os valores para confirmação
    response.status(201).json(project)
})


app.put('/projects/:id/:data', function (request, response) {

})


app.patch('/projects', function (request, response) {

})


app.delete('/projects/:id', function (request, response) {

})

// Criando a escuta
app.listen(port || 3000, () => {
    console.log('Servidor Rodando -> PORT: ' + port + ' 📡')
})