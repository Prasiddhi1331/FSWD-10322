const http = require('http')

const server = http.createServer((req,res)=>{
    res.write("<h1>PING from server</h1>")
    res.end();
})

server.listen(4000)