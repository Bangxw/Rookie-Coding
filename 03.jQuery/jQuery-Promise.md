# jQuery 文档

## promises

三个步骤
var dtd = $.Deferred();  // 创建
dtd.resolve();           // 更新状态
dtd.then()               // 执行回调

```js
function animate1() {
  var dtd = $.Deferred();
  console.log('动作一开始执行。。。')
  setTimeout(function () {
    console.log('Hello World')
    dtd.resolve()
  }, 5000)
  return dtd
}

function animate2() {
  var dtd = $.Deferred();
  console.log('动作二开始执行。。。')
  setTimeout(function () {
    console.log('Hello World')
    dtd.resolve()
  }, 5000)
  return dtd
}

function animate3() {
  var dtd = $.Deferred();
  console.log('动作三开始执行。。。')
  setTimeout(function () {
    console.log('Hello World')
    dtd.resolve()
  }, 5000)
  return dtd
}

animate1()
  .then(function () {
    console.log('动作一执行完成')
    return animate2();
  })
  .then(function () {
    console.log('动作二执行完成')
    return animate3();
  })
  .then(function () {
    console.log('动作三执行完成')
  })
```
