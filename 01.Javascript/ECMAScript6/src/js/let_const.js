{
  let testA = 10
  var testB = 8
}
//console.log(testA) //Uncaught ReferenceError: testA is not defined
console.log(testB) //8


for (var i = 0; i < 10; i++) {}
console.log('i=' + i) //i=10
for (let j = 0; j < 10; j++) {}
//console.log('j=' + j) //Uncaught ReferenceError: j is not defined


var a = []
for (var k = 0; k < 10; k++) {
  a[k] = function () {
    return k
  }
}
console.log('第六次循环返回的值为：' + a[6]()) //10
var b = []
for (let l = 0; l < 10; l++) {
  b[l] = function () {
    return l
  }
}
console.log('第六次循环返回的值为：' + b[6]()) //6


/* for循环有个特别之处，循环变量和循环体内部是两个作用域 */
for (let i = 0; i < 3; i++) { //i 并没有受到影响
  let i = 'abc'
  console.log(i)
}


/* 不存在变量提升 */
console.log(foo) //undefined
var foo = 2
//console.log(bar) //bar is not defined
let bar = 2


/*
 * 暂时性死区（temporal dead zone: TDZ）: ES6明确规定，如果区块中存在let和const命令，这个区块对这些命令申明的变量，从一开始就形成了封闭的作用域。凡是在申明之前就使用它，就会报错
 */
var tmp = 123
if (true) {
  // tmp = 'abd' //tmp is not defined
  let tmp
}
if (true) {
  //tmp = 'abc' // TDZ开始
  //console.log(tmp) //error: tmp is not defined

  let tmp; // TDZ结束
  console.log(tmp)

  tmp = 123
  console.log(tmp) //123
}


function func0() {
  // let a = '123'
  // var a = '123' //Uncaught Error: Module parse failed: Identifier 'a' has already been declared
}

function func1() {
  // let b = 'abc'
  // let b = 'def'
}
//func0() // error
//func1() // error


/* 为什么需要块级作用域 */
var blockTmp = 'Test'

function func2() {
  console.log('blockTmp的值为：' + blockTmp)
  if (false) {
    var blockTmp = 'hello world'
  }
}
func2() //undefined


var s = 'hello'
for (var t = 0; t < s.length; t++) {
  console.log(s[t])
}
console.log(t) // 循环变量泄露为全局变量


function f1() {
  let n = 5
  if (true) {
    let n = 10
    console.log(n)
  }
  console.log(n)
}
f1()

{
  {
    {
      {
        let insance = 10; {
          insance = 8; {
            let insance = 20
            console.log(insance)
          }
          console.log(insance)
        }
        console.log(insance)
      }
    }
  }
}



function f() {
  console.log('I am outside')
}
(function () {
  if (false) {
    function f() {
      console.log('I am inside')
    }
  }
  //f(); //f is not defiend
})()


//函数声明式语句
{
  let a = 'secret'

  function f() {
    return a
  }
}

{
  let a = 'secret'
  let f = function () {
    return a;
  }
}

const PI = 3.141592653589793
//PI = 3  // Assignment to constant variable

// const test
// test = 123

const foo1 = {}
foo1.prop = 123;
console.log(foo1)
//foo1 = {}


const arr1 = []
arr1.push('test')
console.log(arr1.length)
//arr1 = ['dove']  //error: assignment to constant variable


function func3() {
  'use strict'
  // jsii = 'jhii'

  const foo2 = Object.freeze({}) //冻结对象, 严格模式下就会抱错
  foo2.prop = 123
}
// func3()

/* 彻底冻结对象的函数 */
var constantize = (obj) => {
  Object.freeze(obj)
  Object.keys(obj).forEach((key, i) => {
    if (typeof obj[key] === 'Object') constantize(obj[key])
  })
}

let testObj = {
  name: 'wbx',
  age: 18,
  hobby: {}
}

constantize(testObj)

testObj.age = 19
testObj.hobby = {
  a: 's'
}
console.log(testObj)

/*
 * 顶层对象的属性： 在浏览器中指的是window, 在node中指的是global, ES5中顶层对象的属性和全局变量是等价的
 * ES6中，var和function命令申明的全局变量，依旧是顶层对象的属性； const, let, class声明的全局变量，不属于顶层对象的全局变量
 */

window.testC = 2
console.log('顶层对象的属性：' + testC)
testC = 3
console.log('顶层对象的属性：' + testC)


var testD = 1;
console.log(window.testD) //1

let testE = 2;
console.log(window.testE) //undefined

/*
  总结：
  1. ES6规定暂时性死区和let、const语句不出现变量提升，所以变量一定要先申明，再使用
  2. let不允许重复申明
  3. const不允许重新赋值, 声明的时候就必须赋值
  4. const实际上保证的不是值不能改变，而且变量所指的内存地址所保存的那个值不能改变
  5. 最好不要在块级作用域中声明函数，如果确实需要，也应该写成函数表达式，而不是函数声明式语句
*/