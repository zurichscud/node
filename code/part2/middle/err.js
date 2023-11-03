const express = require('express');
//创建Web服务器
const app= express()
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})

app.get('/',function (req,res) {
    throw new Error('服务器发生异常错误')//人为制造一个错误
    res.send('HOME')
})
app.use(express.json())

app.post('/',(req,res)=>{
    console.log(req.body)
})
app.use(function (err,req,res,next) {
    console.log(err.message)
    res.send(err.message)
})