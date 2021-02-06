window.onresize = function() {
  let node = document.querySelector('.master-sidebar')
  document.querySelector('body').classList.remove('asidebar-show')
  node.style = ''
}

document.querySelector('#toggle-aside-nav').addEventListener('click', function () {
  let node = document.querySelector('.master-sidebar')
  node.style.left = '0'
  document.querySelector('body').classList.add('asidebar-show')
}, false)

document.querySelector('body').addEventListener('click', function (e) {
  if (e.target.classList.contains('asidebar-show')) {
    let node = document.querySelector('.master-sidebar')
    node.style.left = '-250px'
    e.target.classList.remove('asidebar-show')
  }
}, false)