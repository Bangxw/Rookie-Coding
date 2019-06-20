# 笔记

> - *I'd like to talk with the world, Talk to you about the world*
> - *我想和这世界谈谈，和你谈谈这世界*

## 文章列表

1. JavaScript
   - [JS基础总结](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/01.JavaScript基础总结.md)
   - [JS算法](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/02.JavaScript算法.md)
   - [JS常用的8种继承](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/03.Javascript常用的8中继承.md)
   - [原型对象与原型链](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/04.原型对象与原型链.md)
   - [ES6文档](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/05.ES6文档.md)
   - [Promies学习](https://github.com/Bangxw/Rookie-Coding/blob/master/01.Javascript/06.Promises讲解.md)
2. Css
   - [Css笔记](https://github.com/Bangxw/Rookie-Coding/blob/master/02.Css/css.md)
3. Webpack
   - [Webpack笔记](https://github.com/Bangxw/Rookie-Coding/blob/master/03.Webpack/readme.md)
4. Vue
   - [Vue总结](https://github.com/Bangxw/Rookie-Coding/blob/master/04.Vue/vue.md)
5. Node
   - [Node总结](https://github.com/Bangxw/Rookie-Coding/blob/master/05.Node/readme.md)
6. BootStrap
   - [Bootscript笔记](https://github.com/Bangxw/Rookie-Coding/blob/master/06.Bootstrap/bootstrap.md)
7. jQuery
   - [jQuery](https://github.com/Bangxw/Rookie-Coding/blob/master/07.jQuery/jqPromise.md)
8.React
   - [React](https://github.com/Bangxw/Rookie-Coding/blob/master/08.React/readme.md)
9.Other
   - [Markdown语法](https://github.com/Bangxw/Rookie-Coding/blob/master/Other/markdown语法.md)
   - [Node相关](https://github.com/Bangxw/Rookie-Coding/blob/master/Other/node相关.md)
   - [VsCode的使用](https://github.com/Bangxw/Rookie-Coding/blob/master/Other/vscode的使用.md)

## 前端

> 何为前端：前端主要负责实现**视觉和交互效果**，主要工作是制作前端页面以及与服务器通信，完成业务逻辑，也就是mvc中v这一层。其核心在于对**用户体验**的追求。

- 骨架：`Html+Css+Javascript`
- 插件：`jQuery、Bootstrap`
- 框架：`Vue、React、Angular`

> 库和框架的区别:

- 框架：是一整套解决方案，对项目的侵入型比较大，项目如果要更换框架，则需要重新架构整个项目
- 库(插件)：提供一个小功能，对项目侵入型比较小，如果某个库无法完成某些需求，可以很容易切换

### 前端发展历程

- **原生js与div+css的基本布局**：实现静态页面，基本效果
- **jQuery之类类库**：解决浏览器兼容性,优化dom操作
- **前端模版引擎**: 解决频繁操作dom的问题,但还是会重复渲染
- **Angular.js 、Vue.js、react.js** : 帮助我们减少不必要的Dom操作，提高渲染效率；双向数据绑定的概念【通过提供的指令，我们前端程序员只需要关心数据的业务逻辑，不再关心DOM是如何渲染的了】

### Node中MVC与前端中MVVM的区别

- MVC是后端分层开发的概念
- Mvvm是前端分层

![img](JavaScript/lib/mvc&mvvm.png)

### 编程模式

- 行为隔离
  1. 内容(html)
  2. 样式(css)
  3. 行为(js)
- 命名空间
  1. 将对象用做命名空间
  2. 命名空间中的构造器应用
- 初始化分支
- 延迟定义
- 配置对象
- 私有变量和方法
- 特权方法
- 私有函数的共有化
- 自执行方法
- 链式调用
- Json

### 设计模式

- 单件模式
- 工厂模式
- 装饰器模式
- 观察者模式

### 代码规范

#### HTML

**语法**：

- 嵌套元素应当缩进一次; Tab键的宽度为两个制表符; 属性尽量使用单引号; 不省略结束标签; 自闭和元素尾部添加斜线
- HTML5添加标准模式: `<DOCTYPE html>`
- HTML根元素指定lang属性: `<html lang="zh">` , [HTML 语言代码参考手册](http://www.w3school.com.cn/tags/html_ref_language_codes.asp)
- IE兼容模式: `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
- 指定字符编码: `<meta charset="utf-8">`
- 引入css文件和js文件可以省略type属性，默认就是text/css和text/javascript
- 布尔型属性不用赋值: `<input type="checkbox" checked disabled>`
- 尽量避免多余的标签，文档中也最好不出现空标签: `<div style="clear: both;"></div>` 用clearfix清除

**标签属性顺序**:

1. class
2. id、name
3. data-*
4. src、for、type、href、value
5. title、alt
6. role、aira=*

#### CSS

**语法**:

- 为了更准确的定位错误,每条声明都应该独占一行
- 每条语句的: 后插入一个空格; 最后一个分号可以省略
- 对于属性值小于1的省略前面的0, 属性值为0省略单位: `margin-left: -.5px; padding-left: 0;`
- 十六进制字母最好小写, 扫描时小写字母容易分辨; 用#fff ==> #ffffff

**属性声明顺序**:

- Positioning
- Box model
- Typographic
- Visual(视觉)

```css
/* Positioning */
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 100;

/* Box-model */
display: block;
float: right;
width: 100px;
height: 100px;

/* Typography */
font: normal 13px "Helvetica Neue", sans-serif;
line-height: 1.5;
color: #333;
text-align: center;

/* Visual */
background-color: #f5f5f5;
border: 1px solid #e5e5e5;
border-radius: 3px;

/* Misc */
opacity: 1;
```

**class 命名**:

- class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。
- 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
- 使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

#### Javascript

1. 构造函数名使用帕斯卡命名方式，如：`VelocityResponseWriter`
2. 变量名和方法名小写开始的驼峰命名，例如：`studentParentName`
3. 常量名用全大写：`MAX_PARAMETER_COUNT = 100`
4. 枚举类名参考普通类名，枚举变量使用全大写
5. 不使用任何带下划线的命名方式, 除非是常量或者是枚举值