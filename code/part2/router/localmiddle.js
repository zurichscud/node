const express = require('express');
const app= express()
const m1=function (req,res,next) {
    next()
}
app.get('/other',m1,function (req,res) {
    res.send('message')
})
