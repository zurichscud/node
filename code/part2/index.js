const express = require('express');
//创建Web服务器
const app= express()
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})
app.get('/index',function (req,res) {
    //处理函数
    console.log(req.query);
    console.log(req.params)
})
app.get('/index/:username',function (req,res) {
    //处理函数
    console.log(req.params)
    res.send(req.params)
})