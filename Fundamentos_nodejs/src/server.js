import http from 'http'
import { Database } from './database.js'
import { json } from './middlewares/json.js'

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

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req

   await json(req , res)

    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users))
        
    } 

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        const user = {
            id: 1,
            name,
            email,
        }

        database.Insert('users', user)
        
       return res.writeHead(201).end()
    } 

        return res.writeHead(404).end('Not Found')
})

server.listen(3333);