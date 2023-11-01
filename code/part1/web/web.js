const http=require('http')
const fs = require('fs');
const path=require('path')

const server = http.createServer()
server.on('request',function (req,res){
    console.log('someone visit our server')
    const url=req.url

    const str=`URL is ${req.url} method is ${req.method}
    `
    console.log(str)
    let content ='<h1>404 NOT FOUND</h1>'
    const urlPath = path.join(__dirname, url)
    //解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    fs.readFile(urlPath,'utf-8',(err, data)=>{
        if (err)
            // content=err.message
            res.end(err.message)
        else
            // content=data
        res.end(data)
    })


})
server.listen(80,function () {
    console.log('Running at localhost:80')
})