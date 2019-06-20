# jQuery 文档

## promises

三个步骤
var dtd = $.Deferred();  //创建
dtd.resolve();          //成功
dtd.then()              //执行回调

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

```js
'use strict'
let promiseCount = 0

function promiseDemo() {
  let thisPromiseCount = ++promiseCount

  let log = document.getElementById('log')
  log.insertAdjacentHTML('beforeend', `<br/><br/>第${thisPromiseCount}次点击: <br/><small>同步代码开始...</small><br/>`)

  // 新构建一个 Promise 实例：使用Promise实现每过一段时间给计数器加一的过程，每段时间间隔为1~3秒不等
  let p1 = new Promise((resolve, reject) => {
    let consume = Math.random() * 2000 + 1000
    log.insertAdjacentHTML('beforeend', '<small>Promise异步代码开始...</small><br/>')
    window.setTimeout(function () {
      resolve('Promise异步代码结束! 耗时:' + consume)
    }, consume)
  })

  // Promise不论成功或失败都会调用 then
  // catch() 只有当promise失败时调用
  p1.then(function (data) {
    log.insertAdjacentHTML('beforeend', '<small>' + data + '</small>')
  })
    .catch(function (reason) {
      console.log('处理失败的promise(' + reason + ')')
    })

  log.insertAdjacentHTML('beforeend', '<small>Promise made 同步代码结束</small><br/>')
}

document.onclick = function () {
  promiseDemo()
}
```
