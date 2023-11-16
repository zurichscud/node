# CommonJS

在node.js中默认支持的模块化规范名为*CommonJS*。在node中一个JS文件就是一个模块

# 模块

## 基本概念

类似于Java中的jar包，由其他开发者编写并分享。

- 内置模块

fs模块，path模块，http模块都由node.js提供，并内置于node中

- 自定义模块

用户创建的每一个JS文件，都是自定义模块

- 第三方模块

第三方开发者编写的JS代码

## 加载模块

require得到的是exports对象

加载内置模块

```js
require(内置模块名)
```

```js
require('path')
```

加载用户自定义模块

```js
require(模块的相对路径)
```

```js
require('./my.js')
```

加载第三方模块

```js
require('moment')
```

**模块加载后，会执行模块内的代码**

```js
//my.js
console.log('模块被加载')
```

```js
//test.js
const my=require('./my.js')
```

> 模块被加载

## CommonJS规范

![image-20231101193245355](assets/image-20231101193245355.png)

# 模块作用域

## 作用域

在自定义模块中定义的变量、方法等成员只能在当前模块内被访问，这种模块级别的访问限制称为模块作用域

模块作用域可以防止全局变量的污染

```js
//my.js
const username='张三'
function say(){
    console.log('模块被加载')
}
```

```js
//test.js
const my=require('./my.js')
console.log(my)
//空对象{ }
```

## 导出变量

每一个JS文件中都默认存在一个`module`对象，他存储了当前模块有关的信息

```js
{
  id: '.',
  path: 'E:\\Doc\\Markdown\\node\\code\\part1\\modscope',
  exports: {},
  filename: 'E:\\Doc\\Markdown\\node\\code\\part1\\modscope\\my.js',
  loaded: false,
  children: [],
  paths: [
    'E:\\Doc\\Markdown\\node\\code\\part1\\modscope\\node_modules',
    'E:\\Doc\\Markdown\\node\\code\\part1\\node_modules',
    'E:\\Doc\\Markdown\\node\\code\\node_modules',
    'E:\\Doc\\Markdown\\node\\node_modules',
    'E:\\Doc\\Markdown\\node_modules',
    'E:\\Doc\\node_modules',
    'E:\\node_modules'
  ]
}
```

`exports`可以共享模块作用域中的成员供外界使用，他本质上是module的属性，是一个对象。

```js
module.exports
```

当外界使用`require`方法导入模块得到的就是`module.exports`所指向的对象

默认情况下`module.exports={}`

共享成员/方法：

相当于在exports对象中添加新的成员/方法

```js
module.exports.成员/方法
```

在exports中创建一个`username`成员，不影响全局变量`username`

```js
const username='张三'
console.log(module)
module.exports.username='李四'
```

等价于

```js
const username='李四'
module.exports.username=username
```

```js
const my=require('./my.js')
console.log(my.username)
//李四
```

也可以直接将一个对象赋值给`module.exports`

```js
module.exports={
    username:'lai',
    sayhello(){
        console.log('hello')
    }
}
```

## exports对象

node提供了`exports`对象简化了`module.exports`的书写，初始时两者指向了**同一个空对象**

```js
exports.username='lai'
```

后续两个指针变量的改变互不不影响，共享的成员以`module.exports`指向的对象为准

```js
module.exports.age=12
exports={username='lai'}
//共享的成员：{age:12}
```

![image-20231101192034103](assets/image-20231101192034103.png)

实际上只要不随意将对象赋值给`module.exports`或`exports`，两者指向的都是同一个对象

也可以只使用其中一个变量，就不会造成混乱

modules.exports适合直接导出封装好的对象

exports适合批量添加至导出的对象中

# 省略

在导入模块时，如果省略js后缀，node会自动补全

如果补全.js后没有找到会补全.json后缀并寻找



# 两种模块化

## cjs

如果后缀为cjs，表示其是一种CommonJS模块

默认情况下js文件都是cjs格式

## 文件夹模块

一个文件夹也可以构成一个模块

```js
require("./文件夹名")
```

默认引入的是`index.js`，index相当于模块的入口

## 引入单个属性

```js
const name =require('./mod').name
```

## 解构赋值

```js
const {name,age,gender}=require('./mod')
```

