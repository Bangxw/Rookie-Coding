/*
 * 增加带颜色的Console.log方法
 */
;(function() {
  console.constructor.prototype.println = function(ctx, color) {
    console.log(
      '%c----------' + (ctx || 'This console.log!') + '----------',
      'color:' + (color || '#0f0')
    )
  }
})()

/*
 * var 只有函数作用域 function(){ ... }
 * let、const 作用于块级作用域 { ... }，不会提升变量
 * let不能重新申明, const不能重新赋值
 */
;(function() {
  println('2018-10-22 var、let、const')

  var varMsg = 'Howdy'
  var varMsg = 'Hello here' //可以重新申明，可以重新赋值

  let letMessage = 'This is your message.'
  letMessage = 'This is another message.'
  //let letMessage = "This is another message.";  //Uncaught SyntaxError: Identifier "letMessage" has already been declared

  const conMessager = 'This is your message.'
  //conMessager = "This is another message."; //Uncaught TypeError: Assignment to constant varible.

  const boolTest = false
  if (boolTest) {
    var test0 = 'hello man'
  } else {
    console.log('变量提升:' + test0)
  }

  if (boolTest) {
    let test = 'hello man'
  } else {
    //console.log(test) //test is not defined
  }
  console.log('')
})()

/*
 * 对象的解构与嵌套
 */
;(function() {
  println('2018-10-23 对象的解构与嵌套')

  const objUser0 = {
    id: 42017,
    name: 'Basir'
  }
  const { name } = objUser0
  const { name: userName } = objUser0 //使用别名
  console.log(name)
  console.log(userName)

  const objUser1 = {
    id: 123,
    name: 'hehe',
    education: {
      degree: 'masters',
      professional: 'software development'
    }
  }
  const {
    education: { degree }
  } = objUser1 //解构嵌套对象
  console.log(degree)
  //console.log(education.professional) //education is not defined

  const objUser2 = {
    id: 123,
    name: 'Hehe'
  }
  const {
    school: { sname } = {} //没有外层的时候可以定义缺省值
  } = objUser2
  console.log(sname)

  //解构实例
  let testUrl = 'http://www.newardassociates.com/#/speaking'
  let parseUrl = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(testUrl)
  let [fullpath, protocol, fullhost, path] = parseUrl
  console.log(
    'protocol:' + protocol,
    'fullhost:' + fullhost,
    'fullpath:' + fullpath,
    'path:' + path
  )

  let point = { x: 2, y: 5 }
  let { x, y } = point
  let { y: pty, x: ptx } = point
  console.log(x, y)
  console.log(pty, ptx)

  let rect = {
    lowerLeft: {
      x: 0,
      y: 0
    },
    upperRight: {
      x: 3,
      y: 4
    }
  }
  let {
    lowerLeft: { x: lox, y: loy } = {},
    upperRight: { x: upx, y: upy } = {}
  } = rect
  console.log(lox, loy, upx, upy)

  const personInfo = {
    firstname: 'Ted',
    lastname: 'Neward',
    age: 45,
    favoriteLanguages: ['ECMAScript', 'Java', 'C#', 'Scala', 'F#']
  }
  let displayDetails = ({ firstname, age }) => {
    console.log(`${firstname} is ${age} years old`)
  }
  displayDetails(personInfo)

  let sayHello = (message = 'Hello World!') => {
    //函数参数预赋值
    console.log(message)
  }
  sayHello()
  sayHello('Howdy!')
})()

/*
 * ES6基础运用
 */
;(function() {
  println('ES6基础运用')

  //数值扩展
  var hexadecimal = 0xf
  var decimal = 15
  var octal = 0x17
  var binary = 0b1111
  console.log('hexadecimal == decimal', hexadecimal == decimal)
  console.log('octal == decimal', octal == decimal)
  console.log('binary == decimal', binary == decimal)

  //查找字符
  let str = "hehay"
  console.log(str.includes('ay')) //true or false
  console.log(str.indexOf('ay')) //返回位置，没有则为-1

  //重复
  let strs = "abc"
  console.log(strs.repeat(5))

  //函数形参赋初始值
  function action(num = 200){
    //num || num = 200
    console.log(num)
  }
  action()
  action(300)

  //模板字符串
  var person = {
    name: 'WBX',
    age: 23,
    sayHello: function() {
      console.log(
        `The user is ${this.name}, and age is ${
          person.age
        } \nHello World!\nThis function is very beautiful`
      )
    }
  }
  person.sayHello()

  //forEach使用
  var greet = (firstname, args) => {
    console.log('Hello', firstname)
    args.forEach(function(arg) {
      console.log(arg)
    })
  }
  // greet('Ted')
  greet('Ted', ['Hope', 'you', 'like', 'this!'])
})()

/*
 * 输出1-10
 */
;(function() {
  println('打印1-10')
  var funs = []
  for (var i = 0; i < 10; i++) {
    funs.push(function() {
      console.log(i) //打印10次10
    })
  }
  funs.forEach(function(fun) {
    fun()
  })

  //利用闭包解决问题
  var functions = []
  for (var i = 0; i < 10; i++) {
    functions.push(
      (function(value) {
        return function() {
          console.log('closure:', value)
        }
      })(i)
    )
  }
  functions.forEach(function(fun) {
    fun()
  })

  //利用es6 let解决问题
  var funcc = []
  for (let i = 0; i < 10; i++) {
    funcc.push(function() {
      console.log('let', i)
    })
  }
  funcc.forEach(function(fun) {
    fun()
  })
})()
