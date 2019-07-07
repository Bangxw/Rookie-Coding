import React from 'react'
import ReactDOM from 'react-dom'

const myH1 = React.createElement('h1', {
  id: 'myH1',
  'title': 'this is a h1'
}, '这是个H1')

ReactDOM.render(myH1, document.getElementById('app'))