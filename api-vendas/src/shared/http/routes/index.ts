import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  return response.json({
    messsage: 'Retorno da API'
  })
})

export default routes
