# ES6基本语法

## 变量声明const和let(块级作用域)

- let: 变量，不可重新声明
- const: 常量，不可重新赋值

## 模板字符串

- ${} 嵌入字符串拼接
- `` 反引号
- includes() 判断是否包含然后直接返回布尔值
- repeat() 重复n次后的字符串

## 函数

- function action(num = 200){ } //没有参数时初始值为200
- 箭头函数 var hello = name => "hello " + name;

## 拓展的对象功能

- 键值对重名，可以重写
- 可以省略方法的冒号和function关键字
- Object.assign() 把多个原对象自身可枚举的属性拷贝给目标对象（浅拷贝）

## 更方便的数据访问 -- 解构

> const people = { name: 'lux', age: 24}; const {name, age} = people; console.log(`${name} --- ${age}`)

## Spread Operator 展开运算符