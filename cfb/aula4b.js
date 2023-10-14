const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (require, response) => {
    response.send('Conteúdo em text/plain')
})

app.get('/aula4', (require, response) => {
    response.json({ texto: 'Conteúdo em JSon', nome: 'Christian' })
})

app.listen(port || 3000, () => {
    console.log('Servidor Rodando!')
})