import http from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

// - http 
// método http
// url

// GET, POST, PUT, PATCH, DELETE

// GET = Buscar um recurso do back-end
// POST = Criar um recurso no back-end 
// PUT  = Atualizar o recursos no back-end
// PATCH = Atualizar uma informação específica de um recurso no back-end
// DELETE = Deletar um recurson no back-end

//GET /users => Buscando usuários do back-end
//POST /users => Criar um recurso de usuários no back-end

// stateful - stateless

// json - javascrip object notation

// HTTP status code

const server = http.createServer(async (req, res) => {
    const { method, url } = req

   await json(req , res)

   const route = routes.find(route => {
    return route.method == method && route.path == url
   })

 if (route) {
    return route.handler(req, res)
 }

  return res.writeHead(404).end()
})

server.listen(3333);