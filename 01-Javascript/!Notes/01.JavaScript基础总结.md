# Javascript 基础总结

> JAVASCRIPT是基于对象和事件驱动的客户端脚本语言，弱类型语言，具有交互性、安全性、跨平台性三大特点。包含三个部分: DOM、BOM、ECMASCRIPT

- DOM: 当一个页面加载时，浏览器会把html文档呈现为具有元素、属性、属性值、文本的节点树, DOM提供了API并规范我们操作这些节点。
- BOM: 提供了独立于内容而与浏览器进行窗口进行交互的对象，可以对浏览器窗口进行交互和操作。核心对象window,window又包含子对象: frames、history、location、navigator、screen
- ECMA规范定义了js作为一门编程语言的标准，包含变量基本类型、对象、函数、作用域、运算符、流程控制语句等

## Javascript数据类型

> js的基本类型：number、string、boolean
> js的复合类型：Array、Date、Number、String、Boolean、Math、Regexp 还有两个核心类型 Object，Function
> 5种基本数据类型： undefined、null、string、object、boolean

- **undefined**
  - 使用var声明变量
  - 区分空对象指针与尚未定义的变量
  - 对未初始化的变量及未声明的变量使用typeof运算符均会返回undefined
- **null**
  - 逻辑上null表示一个空对象的指针
  - 使用typeof检测时会返回object
- **undefined与null的关系**
  - undefined派生于null,因此使用'=='比较时，会返回true
  - 没有必要将变量值显示声明为undefined
  - 声明空对象时应将其赋值为null
- **boolean**
  - 两个值：true和false, 使用Boolean()进行转换，[空字符串、0、null、undefined、NaN]转化为false
- **String**
  - 使用.length属性访问字符串长度，转义序列表示一个字符，无法精确返回双字节字符长度

**转义序列**: "\n"换行   "\t"制表符   "\b"空格   "\r"回车符  "\f"分页符

**类型转换**: toString()、String()、eval()

**数值转换**: Number()、parseInt()、parseFloat()

**数值范围**:

- 最小值: Number.Min_VALUE [1.7976931348623157e+308]
- 最大值: Number.MAX_VALUE [5e-324]
- 正无穷: Infinity
- 负无穷: -Infinity
- 检测办法: isFinite()

## Javascript Dom 操作

**获取节点**:

```js
//通过元素的id属性、name属性、标签名获取节点
//除getElementById之外，其他获取的都是节点集合
document.getElementById("id");
document.getElementsByTagName("p");
document.getElementsByName("name");
document.getElementsByClassName("container-div");
```

**节点指针**：

```js
//节点操作时候html结构中的各种空格，换行符都可能会把文本节点当做同胞元素处理。如firstChild查询的第一个节点为空文本节点, firstElementChild才是你需要的元素节点
parentObj.firstchild
parentObj.firstElementChild
parentObj.lastchild
parentObj.lastElementChild
parentObj.childnodes
neborNode.previousSibling
neborNode.nextSibling
childNode.parentNode
```

**节点操作**：

```js
//创建节点
document.createElement("元素标签");
document.createAttribute("元素属性");
document.createTextNode("文本内容");

//插入节点
Bdocument.insertBefore(newCode,referenceChild);
parentNode.appendChild(newNode);

//替换节点
replaceChild

//复制节点
cloneNode(true/false)

//删除节点
parentNode.removeChild(node)
```

**属性操作**:

```js
//获取属性
getAttribute(name)

//设置属性
setAttribute(name,value)

//删除属性
removeAttribute(name)
```

**文本操作**:

```js
//插入文本
insertData(offset,string) -> 从offset指定的位置插入string

//追加文本
appendData(string) -> 将string插入到文本节点的末尾处

//删除文本
deleteData(offset,count) -> 从offset起删除count个字符

//替代文本
replaceData(offset,count,string) -> 从offset起将count个字符替换为string

//分离文本
splitData(offset) -> 从offset起将文本节点分为两个节点

//返回节点
substringData(offset,count) -> 返回由offset起的count个字符
```