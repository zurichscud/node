const express = require('express');
const router = express.Router();
//挂载路由
router.get('/index',function (req,res) {
    res.send('hello world')

})
router.post('/index',function (req,res) {
    res.send('hello world')

})
module.exports=router