/* ********************************************** 数组的解构赋值 ********************************************** */ ;
(function () {
  // let a = 1;
  // let b = 2;
  // let c = 3;

  let [a, b, c] = [1, 2, 3]
  let [foo, [
    [bar], baz
  ]] = [1, [
    [2], 3
  ]]
  console.log(foo, bar, baz)

  let [, , third] = ['foo', 'bar', 'baz']
  console.log(third)

  let [x, , y] = [1, 2, 3]
  console.log(x, y)

  let [head, ...tail] = [1, 2, 3, 4]
  console.log('head=' + head, 'tail=' + tail)

  let [foo1] = []
  let [bar1, foo2] = [1]
  console.log(foo1, foo2, bar1)

  let [x1, y1] = [1, 2, 3]
  let [a1, [b1], d1] = [1, [2, 3], 4]
  console.log(x1, y1, a1, b1, d1)

  // 以下都会报错，不可遍历的结构
  // let [fot0] = 1
  // let [fot1] = false
  // let [fot2] = NaN
  // let [fot3] = undefined
  // let [fot4] = null
  // let [fot5] = {}

  let [x2, y2, z2] = new Set([110, 210, 310])
  console.log(x2, y2, z2)


  //默认值
  let [foo3 = true] = []
  let [x3, y3 = '123'] = ['test']
  let [x4, y4 = '123'] = ['test', undefined]
  let [foo4 = '123'] = [null] //只有当数组成员 === undefined时，才会使用默认值
  console.log(foo3, x3, y3, x4, y4, foo4) //true "test" "123" "test" "123"

  function func0() { //惰性求值
    console.log('aaa')
  }
  let [v0 = func0()] = ['123']
  console.log(v0)
})()


/* ********************************************** 对象的解构赋值 ********************************************** */
;
(function () {
  let {
    foo,
    bar
  } = {
    foo: 'aaa',
    bar: 'bbb'
  }
  console.log(foo, bar)

  /* 变量必须与属性同名，才能取到值 */
  let {
    bar1,
    foo1
  } = {
    foo1: 'aaa',
    bar1: 'bbb'
  }
  console.log(bar1, foo1) // bbb aaa
  let {
    baz
  } = {
    foo: 'aaa',
    bar: 'bbb'
  }
  console.log(baz) // undefined

  // let {log, sin, cos} = Math
  let {
    log
  } = console
  log('hello')

  /* 如果变量名和属性名不一致 foo2是匹配的模式，baz2才是变量*/
  let {
    foo2: baz2
  } = {
    foo2: 'aaa',
    bar2: 'bbb'
  }
  let obj = {
    first: 'hello',
    last: 'world'
  }
  let {
    first: f,
    last: l
  } = obj
  console.log(baz2, f, l)

  let obj1 = {
    p: ['hello', {
      y: 'world'
    }]
  }
  // let {p: [x, {y}]} = obj1 //p是模式，不是变量
  let {
    p,
    p: [x, {
      y
    }]
  } = obj1
  console.log(p, x, y)

  const node = {
    loc: {
      start: {
        line: 1,
        cloumn: 5
      }
    }
  }
  let {
    loc,
    loc: {
      start,
      start: {
        line,
        cloumn
      }
    }
  } = node
  console.log(loc, start, line, cloumn)

  let obj4 = {}
  let arr4 = [];
  ({
    foo: obj4.prop,
    bar: arr4[2]
  } = {
    foo: 'hello',
    bar: 'world'
  })
  console.log(obj4, arr4) // {prop: 'hello'}  [undefined, undefined, 'wrold']

  /* 解构继承的属性 */
  const objS = {}
  const objP = {
    foo: 'bar'
  }
  Object.setPrototypeOf(objS, objP)
  let {
    foo: foo5
  } = objS
  console.log(foo5)

  let {
    x6 = 3
  } = {}
  let {
    x7,
    y7 = 5
  } = {
    x7: 1
  }
  let {
    x8: y8 = 3
  } = {}
  let {
    x9: y9 = 3
  } = {
    x9: 5
  }
  let {
    message: msg = 'Somthing went wrong'
  } = {}
  console.log(`x6=${x6} x7=${x7} y7=${y7} y8=${y8} y9=${y9} msg=${msg}`) //3 1 5 3 5 ...

  /* 注意点 */
  // let x10;
  // {x10} = {x10:1} // 报错，{x10}会当成代码块去解析

  let x10;
  ({
    x10
  } = {
    x10: 1
  })
  console.log(x10)

  let arr10 = ['a', 'b', 'c']
  let {
    0: first,
    [arr10.length - 1]: last
  } = arr10
  console.log(first, last)

  /* 字符串解构 */
  const [a, b, c, d, e] = 'hello'
  console.log(a, b, c, d, e)

  let {
    length: len
  } = 'hello'
  console.log(len)

  let {
    toString: s0
  } = 123
  let {
    toString: s1
  } = true
  console.log(s0 === Number.prototype.toString, s1 === Boolean.prototype.toString)

  /* 解构赋值的规则就是只要右边不是对象或字符串，则会先转为对象 */
  // let { prop : q1 } = undefined
  // let { prop : q2} = null

  /* 函数参数的解构赋值 */
  function add([x, y]) {
    return x + y
  }
  console.log(add([12, 24]))

  console.log([
    [1, 2],
    [3, 4]
  ].map(([a, b]) => a + b))

  function move({
    x = 0,
    y = 0
  } = {}) {
    return [x, y]
  }
  console.log(move({
    x: 3,
    y: 8
  }))

  function move({
    x,
    y
  } = {
    x: 0,
    y: 0
  }) {
    return [x, y]
  }

  /* 用途 */
  // 1. 变换变量的值
  let n = 1;
  let m = 2;
  [n, m] = [m, n]
  console.log(n, m)

  // 2. 从函数返回多个值
  function example() {
    return [10, 20, 30]
  }
  let [l1, n1, m1] = example()
  function example1() {
    return {
      m2: 40,
      n2: 50
    }
  }
  let {m2, n2} = example1()
  console.log(l1, n1, m1, n2, m2)

  // 3. 函数参数的定义
  function f0([z, y, x]) {}
  f0([1, 2, 3])
  function f1({z, y, x}) {}
  f1({z: 3, y: 2, x: 1})

  // 4. 提取json数据
  let jsonData = {
    id: 42,
    status: 'OK',
    data: [867, 5309]
  }
  let {id, status, data: number} = jsonData
  console.log(id, status, number)

  // 5. 函数参数的默认值
  jQuery.ajax = function (url, {
    aync = true,
    beforeSend = function(){},
    cache = true,
    complete = function(){},
    crossDomain = false,
    global = true
  } = {}) { }

  // 6. 输入模块的指定方法
  const { SourceMapConsumer, SourceNode } = require('source-map')
})()