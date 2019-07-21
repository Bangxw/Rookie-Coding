// 1. 导入包
import React from 'react'
import ReactDOM from 'react-dom'

// 2. 创建虚拟DOM元素

// const myDiv = React.createElement('div', {
//   id: 'test'
// }, 'Hello div!')


const myDiv = <div id="myDiv" title="div aaa">这是一个div元素</div>

// 3. 调用 render 函数渲染
ReactDOM.render(myDiv, document.getElementById('app'))