const express = require('express');
//创建Web服务器
const app= express()
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})

app.use(function (req, res, next) {
    res.send('我是全局中间件')
})