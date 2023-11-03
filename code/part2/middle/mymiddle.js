const express = require('express');
//创建Web服务器
const app= express()
app.listen(80,()=>{
    console.log('express running at localhost:80 ......');
})

app.use((req,res,next)=>{
    req.on('data',function(chunk){
        str+=chunk
    })
    req.on('end',function () {
        console.log(str)
        
    })

})