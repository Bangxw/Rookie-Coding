let firstName = 'Michael'
let lastName = 'Jackson'
let year = 1958

// function f() {}
// export f // error

export function fun(data) {
  console.log(data)
}

export {
  firstName as f,
  lastName as l,
  year as y
}

export var foo = 'bar'
setTimeout(() => foo = 'baz', 500)

function foo1() {
  // export default 'bar' // 编译都会出错
}
foo1()

export function area(radius) {
  return Math.PI * radius * radius
}

// export default function() {
//   console.log('foo-default')
// }

export function circumference(radius) {
  return 2 * Math.PI * radius
}

function add(x, y) {
  return x * y
}

export {add as default}
