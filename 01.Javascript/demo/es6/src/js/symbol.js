/*
 * js原始数据类型： undefined 、null、Boolean、String、Number、Object
 */

let str0 = Symbol()
console.log(typeof str0)

let str1 = Symbol('foo')
let str2 = Symbol('bar')
console.log(str1, str2)

const obj0 = {
  toString() {
    return 'abc'
  }
}
console.log(Symbol(obj0))

let str3 = Symbol()
let str4 = Symbol()
console.log(str3 === str4)
let str5 = Symbol('foo')
let str6 = Symbol('foo')
console.log(str5 === str6)

/* Symbol值不能与其他类型的值进行运算， 会报错 */
let sym0 = Symbol('My symbol')
//console.log(`your symbol is ${sym}`) // Error: cannot conver a symbol value to a string

/* Symbol可以显示的转为布尔值 */
let sym1 = Symbol()
console.log(sym1.toString())
console.log(Boolean(sym1))

let mySymbol = Symbol()
let obja = {}
obja[mySymbol] = 'Hello'

/* Symbol作为对象属性名时，不能用点运算符；在对象内部，必须放在方括号内 */

let str7 = Symbol()
let objb = {
  [str7](arg) {
    console.log('这是作为属性名的symbol:' + arg)
  }
}
objb[str7](123)

const log = {}
log.levels = {
  DEBUG: Symbol('debug'),
  INFO: Symbol('info'),
  WARN: Symbol('warn')
}
console.log(log.levels.DEBUG, 'debug message')
console.log(log.levels.INFO, 'info message')

const COLOR_RED = Symbol('A')
const COLOR_GREEN = Symbol('B')

function getComplement(color) {
  switch (color) {
    case COLOR_RED:
      return COLOR_GREEN
    case COLOR_GREEN:
      return COLOR_RED
    default:
      throw new Error('Undefined color')
  }
}

console.log(getComplement(COLOR_RED))
console.log(getComplement(COLOR_GREEN))

// 消除魔术字符串
// const shapeType = {
//   triangle: 'triangle'
// }

const shapeType = {
  triangle: Symbol()
}

function getArea(shape, options) {
  let area = 0

  switch (shape) {
    // case 'Triangle': //triangle就是个魔术字符串，与代码形成强耦合
    case shapeType.triangle: // 用变量
      area = .5 * options.width * options.height
    break;
  }
  return area
}

console.log(getArea(shapeType.triangle, { width: 100, height: 100 }))

// 属性名遍历
const obj = {}
let a = Symbol('a')
let b = Symbol('b')

obj[a] = 'Hello'
obj[b] = 'World'

const objectSymbol = Object.getOwnPropertySymbols(obj)
console.log(obj[a], obj[b])
console.log(objectSymbol)