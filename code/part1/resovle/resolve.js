const fs = require('fs')
const path = require('path')
const filePath=path.join(__dirname,'06-倒计时.html')
const regCSS=/<style>[\s\S]*<\/style>/
const regScript=/<script>[\s\S]*<\/script>/

//读入文件
fs.readFile(filePath,'utf-8',function (err, dataStr) {
    if (err)
        console.log('读取失败'+err.message)
    else{
        resolveCSS(dataStr)
        resolveScript(dataStr)
        resolveHTML(dataStr)
    }

})

function resolveCSS(data) {
    const regData = regCSS.exec(data)[0];
    const res=regData.replace('<style>','').replace('<\/style>','')
    const pathCSS=path.join(__dirname,'style.css')
    fs.writeFile(pathCSS,res,'utf-8',function (err) {
      if (err){
          return console.log('写入CSS文件失败'+err.message)
      }
      console.log('写入CSS文件成功')

    })


}
function resolveHTML(data) {
    data.replace(regCSS,'<link rel="stylesheet" href="style.css">')
        .replace(regScript,'<script src="倒计时.js"><\/script>')
}
function resolveScript(data) {

}

