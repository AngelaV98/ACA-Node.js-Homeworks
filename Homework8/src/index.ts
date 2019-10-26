const http = require('http');

const server = http.createServer((req: any,res: any)=>{
    res.write("Hello World");
    res.end();
})

server.listen(8080);
