import './css/main.css'
import printMe from './js/print'
import iconSrc from './images/icon.png'

const component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  btn.innerText = 'Click me and check console'
  btn.onclick = printMe

  let myIcon = new Image()
  myIcon.src = iconSrc

  element.appendChild(btn)
  element.appendChild(myIcon)
  element.classList.add('wrap-container')
  return element
}

document.getElementById('app').appendChild(component())