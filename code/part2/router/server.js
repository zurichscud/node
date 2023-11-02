const express = require('express');
//创建Web服务器
const app= express()
const router =require('./router')
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})

app.use(router)