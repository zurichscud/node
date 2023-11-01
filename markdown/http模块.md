# HTTP模块

由node.js提供，用来创建Web服务器的模块，通过http的`http.createServer()`方法，就能够把一台电脑变成一个Web服务器，从而对外提供Web服务

```js
const http =require('http')
```

类似于Tomcat，Apache

## 创建Web服务器

```js
const http=require('http')

const server = http.createServer()
//绑定事件
server.on('request',function (req,res){
    console.log('someone visit our server')
})
//指定监听端口号
server.listen(80,function () {
    console.log('Running')
})
```

> Running
> someone visit our server

## requset

`'request'`为事件类型

只要服务器接收到了request请求，就会调用`server.on`绑定的request事件处理函数

callback的 第一个参数为*request对象*，第二个为*response对象*

- `req.url`：客户端请求的URL
- `req.method` 客户端的`method`请求类型

```js
server.on('request',function (req,res){
    console.log('someone visit our server')

    const str=`URL is ${req.url}
    method is ${req.method}
    `
    console.log(str)
})
```

> 浏览器URL：localhost/index.html
>
> URL is /index.html
>     method is GET

可以使用Postman测试API

## response

响应对象

- `res.end(string)`

向请求方响应信息。string会被浏览器所解析并渲染，HTML标签也可以被识别

```js
res.end('<h1>Hello Web</h1>')
```

> Hello Web

## 中文乱码处理

```js
    res.setHeader('Content-Type','text/html;charset=utf-8')
    res.end('<h1>Hello Web世界</h1>')
```

> Hello Web世界



## 根据不同的URL响应不同的HTML内容

1. 获取请求的URL
2. 设置默认的响应内容为404
3. 根据不同的URL，响应不同的HTML内容

```js
server.on('request',function (req,res){
    console.log('someone visit our server')
    const url=req.url

    const str=`URL is ${req.url}
    method is ${req.method}
    `
    console.log(str)
    let content ='<h1>404 NOT FOUND</h1>'
    //解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    if (url==='/'||url==='/index.html')
        content='<h1>首页</h1>'
    if (url==='/about.html')
        content='<h1>首页</h1>'
    res.end(content)

})
```

## 文件存放路径作为Web请求的URL

使用`readFile`读取文件内容便可以实现根据不同的URL访问不同的文件

```js
    const urlPath = path.join(__dirname, url)
    //解决中文乱码
    res.setHeader('Content-Type','text/html;charset=utf-8')
    fs.readFile(urlPath,'utf-8',(err, data)=>{
        if (err)
            // content=err.message
            res.end(err.message)
        else
            // content=data
        res.end(data)
    })
```

如果HTML页面中存在其他资源的路径，浏览器将根据当前页面所在的路径进行拼接（相对路径）

客户端请求的URL和实际资源的URL可以不相同，两者的URL相当于一种映射关系，我们可以根据`path.join`优化资源的请求路径

`clock` -> `./web/clock.html`



