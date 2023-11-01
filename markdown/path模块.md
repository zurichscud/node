# path模块

path模块是node提供的用来处理路径的模块 

`path.join()`用来将多个路径片段拼接成一个完整的路径字符串

`path.basename()`，从路径中解析文件名

```js
const path =require('path')
```

## path.join

```js
path.join(path1,path2,...)
```

```js
path.join('__dirname','/hello.txt')
```

如果没有`/`，node会自动添加

## path.basename

```js
path.basename(path[,ext])
```

path【string】：文件路径

ext【string】：文件后缀，可选参数，指定文件后缀后输出的文件名就不包含后缀了

return【string】：文件名

```js
path.basename('/a/b/c/hello.txt','.txt')
//hello.txt
```

## path.extname

```js
path.extname(path)
```

获取文件的扩展名

path：路径

return：扩展名（例如`.html`）