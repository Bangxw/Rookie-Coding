import '../css/style.css'
import printMe from "./print";
import iconSrc from "../images/icon.png"

let component = () => {
  let element = document.createElement('div')
  let btn = document.createElement('button')

  btn.innerHTML = "Click me and check console"
  btn.onclick = printMe

  let myIcon = new Image()
  myIcon.src = iconSrc

  element.appendChild(btn)
  element.appendChild(myIcon)
  element.classList.add("wrap-container")
  return element
}
document.getElementById("root-trunk").appendChild(component())