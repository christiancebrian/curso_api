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
// Função Log de acesso as rotas, isso é um Middlewares
function logRoutes(request, response, next) {
    // Pegando dados dos parametros do request
    const { method, url } = request
    // console.log(request)
    // Para Registrar no log a informação do método e url utilizados
    const route = `[${method.toUpperCase()} ${url}]`
    console.log(route)
    // Para dar continuidade as funções abaixo
    return next()
}

// Chamando a função Middleware LOG
// Neste local a função serve para todos os métodos e rotas
app.use(logRoutes)

// Já no modelo abaixo sem a função acima, especificamos onde o Middleware vai funcionar. Está depois da rota
// app.get('/projects', logRoutes, function (request, response) {
//     return response.json(projects)
// })

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


app.put('/projects/:id', function (request, response) {
    const { id } = request.params
    const { nome, idade } = request.body
    // Pegando o ID para busca no indice do Array Projects
    const projectIndex = projects.findIndex(p => p.id === id)
    // Validação se caso o ID não existe
    if (projectIndex < 0) {
        return response.status(404).json({
            cod: 2,
            menssage: 'ID não encontrado'
        })
    }
    // Verificando se os campos nome e idade foram enviados
    if (!nome || !idade) {
        return response.status(400).json({
            cod: 3,
            menssage: 'Campos nome e idade são requeridos'
        })
    }
    // Após verificações criando nova array
    const project = {
        id,
        nome,
        idade
    }
    // Atualizando a Array
    projects[projectIndex] = project
    response.json(project)
})


app.patch('/projects/:id', function (request, response) {
    const { id } = request.params
    const { nome, idade } = request.body
    // Pegando o ID para busca no indice do Array Projects
    const projectIndex = projects.findIndex(p => p.id === id)
    // Validação se caso o ID não existe
    if (projectIndex < 0) {
        return response.status(404).json({
            cod: 2,
            menssage: 'ID não encontrado'
        })
    }
    // Verificando se os campos nome e idade foram enviados
    if (!nome && !idade) {
        return response.status(400).json({
            cod: 3,
            menssage: 'Campos nome ou idade são requeridos'
        })
    }
    // Após verificações criando nova array
    const project = {
        id,
        nome,
        idade
    }
    // Atualizando a Array
    projects[projectIndex] = project
    response.json(project)
})


app.delete('/projects/:id', function (request, response) {
    const { id } = request.params
    const { nome, idade } = request.body
    // Pegando o ID para busca no indice do Array Projects
    const projectIndex = projects.findIndex(p => p.id === id)
    // Validação se caso o ID não existe
    if (projectIndex < 0) {
        return response.status(404).json({
            cod: 2,
            menssage: 'ID não encontrado'
        })
    }
    // Atualizando a Array
    projects.splice(projectIndex, 1)
    response.json({
        cod: 4,
        menssage: 'Registro excluido!'
    })
})

// Criando a escuta
app.listen(port || 3000, () => {
    console.log('Servidor Rodando -> PORT: ' + port + ' 📡')
})