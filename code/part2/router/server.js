const express = require('express');
//创建Web服务器
const app= express()
const router =require('./router')
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})



app.use(function (req, res, next) {
    console.log('第一个中间件');
    next()

})
app.use(function (req, res, next) {
    console.log('第二个中间件');
    next()

})
app.use('/special', (req, res, next) => {
    console.log('This middleware runs for requests to /special');
    req.name='lai'
    next();
});
app.get('/special/index',(req, res)=>{
    req.name=req.name+12
    res.send(req)
})



