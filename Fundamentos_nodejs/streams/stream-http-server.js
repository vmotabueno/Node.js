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

const server = http.createServer((req, res) => {
    return req
    .pipe(new InverseNumberSteam())
    .pipe(res)

})

server.listen(3334)