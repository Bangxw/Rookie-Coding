// alert("Hello Webpack!!")
// require('./a.js')    // 引入a.js
// require('./b.js')		// 引入b.js

// const arr = [1, 2, 3, 4, 5]
// const sum = arr.reduce((a, b) => a + b)

// console.log(`数组[1, 2, 3, 4, 5]求和：${sum}`)

import './css/index.css'
import img from './images/97ad.gif'

let root = document.createElement('div')
root.id = 'root'

let hello = document.createElement('span')
hello.className = 'hello'
hello.innerText = '<hello-world />'

let imgNode = new Image()
imgNode.src = img
imgNode.style.display = 'block'
imgNode.style.width = '184px'
imgNode.style.marginTop = '20px'

root.appendChild(hello)
root.appendChild(imgNode)
document.getElementsByTagName('body')[0].appendChild(root)
