import http from 'http'

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

const users = []

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    const buffers = []

    for await (const chunk of req){
        buffers.push(chunk)
    }

    try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch {
    req.body = null
  }

    if (method === 'GET' && url === '/users') {
        return res
            .setHeader('content-type', 'application/json')
            .end(JSON.stringify(users))
        
    } 

    if (method === 'POST' && url === '/users') {
        const { name, email } = req.body

        users.push({
            id: 1,
            name,
            email,
        })


       return res.writeHead(201).end()
    } 

        return res.writeHead(404).end('Not Found')
})

server.listen(3333);