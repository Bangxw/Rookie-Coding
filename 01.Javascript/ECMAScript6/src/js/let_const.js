{
  let testA = 10;
  var testB = 10;
}

console.log(testB)
// console.log(testA) // a is not defined

var a = []
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i)
  }
}
a[6]() //输出最后一个值

var b = []
for(let i = 0; i < 10; i++) {
  b[i] = function() {
    console.log(i)
  }
}
b[6]() //正常输出

for(let i = 0; i<3; i++) { //i 并没有受到影响
  let i = 'abc'
  console.log(i)
}

/* 不存在变量提升 */
console.log(foo)
var foo = 2

//console.log(bar) //bar is not defined
let bar = 2

var tmp = 123
if(true) {
  // tmp = 'abd' //tmp is not defined
  let tmp
}