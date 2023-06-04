// 1. 一般形式调用：this指向window
function fn() {
  console.log(this === window)
}
fn() // => true


// 2. 作为对象的方法调用，this指向该对象
const user = {
  name: '冷子兴',
  say: function() {
    return this.name + "演说荣国府"
  }
}
console.log(user.say())


// 3. 使用new关键字调用，this指向new的新对象
let that = null;
function Fn() {
  that = this;
}
const obj = new Fn();
console.log(that === obj)