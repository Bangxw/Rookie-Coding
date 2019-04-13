var regex0 = new RegExp('xyz','i')
var regex1 = /xyz/i
var regex2 = new RegExp(/xyz/gi) // 等价于 /xyz/gi
var regex3 = new RegExp(/xyz/gi, 'i'); //es5报错, es6可以(修饰符gi会被替换为i)

/*
  正则方法： match() replace() search() split()
  String.prototype.match => RegExp.prototype[Symbol.match]
  String.prototype.replace => RegExp.prototype[Symbol.replace]
  String.prototype.search => RegExp.prototype[Symbol.search]
  String.prototype.split => RegExp.prototype[Symbol.split]
*/

//u修饰符
console.log(/^\uD83D/u.test('\uD83D\uDC2A')); //false 正确匹配双字符
console.log(/^\uD83D/.test('\uD83D\uDC2A'))

let str = '𠮷'
console.log(/^.$/.test(str))
console.log(/^.$/u.test(str))  // .字符正确匹配 码点大于0xFFFF的unicode字符

console.log(/\u{61}/.test('a'))
console.log(/\u{61}/u.test('a'))  // 正确匹配unicode的大括号

console.log(/𠮷{2}/.test('𠮷𠮷')) // 码点大于0xFFFF的unicode字符不能匹配
console.log(/𠮷{2}/u.test('𠮷𠮷'))

//正确返回字符串长度
function codePointLength(str) {
  let result = str.match(/[\s\S]/gu)
  return result ? result.length : 0
}
console.log(str.length)
console.log(codePointLength(str))