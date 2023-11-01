# fs

```js
const fs =require('fs')
```

`fs.readFile()`读取文件内容

`fs.writeFile()`写入文件内容

## readFile

```js
fs.readFile(path[,options],callback)
```

- path路径
- option编码格式
- 通过回调函数获取读取的结果

```js
const fs = require('fs')//导入模块
fs.readFile('./hello.txt', 'utf-8', function (err, dataStr) {
    console.log(err)
    console.log('--------------')
    console.log(dataStr)
})
```

err为读取失败的值

dataStr为读取成功的值

读取成功err=null

读取失败，err为错误对象，dataStr=undefined

优化读取文件逻辑：

```js
fs.readFile('./hello.txt', 'utf-8', function (err, dataStr) {
    if (err){
        console.log('读取失败'+err.message)
    }
    else
        console.log('读取成功')
})
```

## writeFile

写入文件

```js
fs.writeFile(file,data[,option],callback)
```



```js
fs.writeFile('./hello2.txt','abcd','utf-8',function (err) {
    console.log(err)
})
```

写入成功时err=null

`writeFile`要求该文件所在路径必须存在

`writeFile`会覆盖原文件中的内容

## __dirname

`__dirname`表示当前JS文件所处的目录

```js
fs.writeFile(__dirname+'/hello2.txt','abcd','utf-8',function (err) {
    console.log(err)
})
```

