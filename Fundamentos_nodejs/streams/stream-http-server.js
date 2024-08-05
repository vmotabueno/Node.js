import http, { createServer } from'node:http'
import {Transform} from 'node:stream'

class InverseNumberSteam extends Transform{
    _transform(chunk, encoding, callback){
       const Transformed = Number(chunk.toString()) * -1

       console.log(Transformed)
       callback(null, Buffer.from(String(Transformed)))
    }
} 

// req => ReadableStream
// res => WritableStream

const server = http.createServer(async (req, res) => {
    const buffers = []


    for await (const chunk of req){
        buffers.push(chunk)
    }

   const FullStreamContent = Buffer.concat(buffers).toString()

   console.log(FullStreamContent)

   return res.end(FullStreamContent)
})

server.listen(3334)