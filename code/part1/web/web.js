const http=require('http')
const url = require("url");

const server = http.createServer()
server.on('request',function (req,res){
    console.log('someone visit our server')
    const url=req.url

    const str=`URL is ${req.url}
    method is ${req.method}
    `
    console.log(str)
    let content ='<h1>404 NOT FOUND</h1>'
    //解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (url==='/'||url==='/index.html')
        content='<h1>首页</h1>'
    if (url==='/about.html')
        content='<h1>首页</h1>'
    res.end(content)

})
server.listen(80,function () {
    console.log('Running')
})