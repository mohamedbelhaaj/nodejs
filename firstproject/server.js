const http =require('http');
 const server =http.createServer((req,res)=>{
    res.writeHead(200,{'content-Type' : 'text/plain'})
    res.end('hello from my server')   
})
const PORT = 5000 ;
server.listen(PORT,()=>{
    console.log('server running on port' +PORT);
})