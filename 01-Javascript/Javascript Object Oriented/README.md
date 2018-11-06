# Rookie

*I'd like to talk with the world, Talk to you about the world*
*我想和这世界谈谈，和你谈谈这世界*

## 编程模式

* 行为隔离
  1. 内容(html)
  2. 样式(css)
  3. 行为(js)
* 命名空间
  1. 将对象用做命名空间
  2. 命名空间中的构造器应用
* 初始化分支
* 延迟定义
* 配置对象
* 私有变量和方法
* 特权方法
* 私有函数的共有化
* 自执行方法
* 链式调用
* Json

## 设计模式

* 单件模式
* 工厂模式
* 装饰器模式
* 观察者模式

## 代码规范（我的代码逻辑也许没那么强，但在规范上一定不输给你   指不定啥时候一个分号就搞死你）

### HTML

> 语法
* 嵌套元素应当缩进一次; Tab键的宽度为四个制表符; 属性尽量使用双引号; 不省略结束标签; 不在自闭和元素尾部添加斜线
* HTML5添加标准模式: `<DOCTYPE html>`
* HTML根元素指定lang属性: `<html lang="zh">`
* IE兼容模式: `<meta http-equiv="X-UA-Compatible" content="IE=Edge">`
* 指定字符编码: `<meta charset="utf-8">`
* 引入css文件和js文件可以省略type属性，默认就是text/css和text/javascript
* 布尔型属性不用赋值: `<input type="checkbox" checked disabled>`
* 尽量避免多余的标签，文档中也最好不出现空标签: `<div style="clear: both;"></div>` ==> 用clearfix清除
> 属性顺序
1. class
2. id、name
3. data-*
4. src、for、type、href、value
5. title、alt
6. role、aira=*

### CSS

> 语法
* 为了更准确的定位错误,每条声明都应该独占一行
* 每条语句的: 后插入一个空格; 所有语句以分号结尾
* 对于属性值小于1的省略前面的0, 属性值为0省略单位: `margin-left: -.5px; padding-left: 0;`
* 十六进制字母最好小写, 扫描时小写字母容易分辨; 用#fff ==> #ffffff
> 属性声明顺序
* Positioning
* Box model
* Typographic
* Visual

``` code
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

#### class 命名

* class 名称中只能出现小写字符和破折号（dashe）（不是下划线，也不是驼峰命名法）。破折号应当用于相关 class 的命名（类似于命名空间）（例如，.btn 和 .btn-danger）。
* 使用有意义的名称。使用有组织的或目的明确的名称，不要使用表现形式（presentational）的名称。
* 使用 .js-* class 来标识行为（与样式相对），并且不要将这些 class 包含到 CSS 文件中。

#### Javascript变量定义及命名

* 变量声明时用一个var，变量名间用逗号隔开，最好定义在开头（JavaScript解析引擎解析的时候会把变量名和函数名提升）
* 变量命名用驼峰命名法
* JavaScript多用单引号，在JavaScript中引号中还需要引号的时候，要求我们单双引号间隔着写才是合法的语句