// 1.字符串的unicode表示法
let a = '\u0061'
let b = '\uD842\uDFB7'
let c = '\u{20BB7}'

console.log(a, b, c)

// 2. codePointAt()
let str0 = '𠮷'
console.log(str0.length, str0.charAt(0), str0.charAt(1), str0.charCodeAt(0), str0.charCodeAt(1))

let str1 = '𠮷a'
console.log(str1.length, str1.codePointAt(0).toString(16), str1.codePointAt(1).toString(16), str1.codePointAt(2).toString(16))

for (let t of str1) {
  console.log(t.codePointAt(0).toString(16))
}

function is32bit(c) {
  return c.codePointAt(0) > 0xffff
}
console.log(is32bit('𠮷'), is32bit('a'))

// 3. stringFromCode()
console.log(String.fromCharCode(0x20bb7))
console.log(String.fromCodePoint(0x20bb7))

// 4. 字符串的遍历器接口
for (let codePoint of str1) {
  console.log('codePoint: ' + codePoint)
}
for (var i = 0; i < str1.length; i++) {
  console.log(str1.substr(i, 1))
}

// 5.inclues()、starsWith()、endsWith
let str2 = 'hello world'
console.log(str2.startsWith('hello'))
console.log(str2.endsWith('ld'))
console.log(str2.includes('hello'))

console.log(str2.startsWith('world', 6))
console.log(str2.endsWith('ld', 11)) // 针对前n个字符
console.log(str2.includes('hello', 0))

// 6.repeat() Infinity和小于-1会报错  参数是0到-1之间、NaN
console.log('x'.repeat(3))
console.log('hello'.repeat(2))
console.log('na'.repeat(0))
console.log('na'.repeat(2.9))

// 7. padStart() 、 padEnd()
console.log('x'.padStart(5, 'ab')) // ababx
console.log('x'.padEnd(5, 'ab')) // xabab
console.log('xxx'.padStart(2, 'ab')) // xxx
console.log('abc'.padStart(10, '0123456789')) // 0123456abc
console.log('x'.padStart(4)) // "   x"
console.log('x'.padEnd(4)) // "x   "
console.log('12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-MM-12"
console.log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"

//模板字符串
let basket = {
  count: 10,
  onSale: 50
}
let html0 = (
  'There are <b>' + basket.count + '</b>' +
  ' items in your basket, ' +
  '<em>' + basket.onSale + '</em> are on sale'
)

let html1 = `There are <b>${basket.count}</b> items in your basket, <em>${basket.onSale}</em> are on sale`
console.log(html0 === html1)

console.log(`In Javascript '\n' is a line-feed`)
console.log(`In Javascript this is
not legal`)

let tmpx = 5,
  tmpy = 8
console.log(`${tmpx} + ${tmpy} = ${tmpx + tmpy}`)

const data = [{
  first: '<Jane>',
  last: 'Bond'
}, {
  first: 'Lars',
  last: '<Croft>'
}]
const tmpl = addrs => `<table>${addrs.map(addr => `
  <tr>
    <td>${addr.first}</td>
    <td>${addr.last}</td>
  </tr>`).join('')}
</table>`
console.log(tmpl(data))

//标签模板
alert`123`
alert(123)