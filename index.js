const http = require('http')
const fs = require('fs')
const path = require('path')
const os = require('os')

const server = http.createServer((req,res)=>{
    res.writeHead(403,{
        "custom":"custom value",
        "date": new Date().getDate(),
        version:os.version()
    })
    
    if(req.url==='/'){
        const data = fs.readFileSync(path.join(__dirname,'/public/home.html'))
        res.write(data)
    }else if(req.url==='/about'){
        const data = fs.readFileSync(path.join(__dirname,'/public/about.html'))
        res.write(data)
    }else if(req.url==='/photo'){
        const data = fs.readFileSync(path.join(__dirname,'/public/image.jpg'))
        res.write(data)
    }
    res.writeHead(200,{
        'custom':"something"
    })
        res.end()
    })  


server.listen(8080)