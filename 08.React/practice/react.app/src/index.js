import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/index.css'
import Router from '@configs/router.config'

// const hello = React.createElement('h1', { title: 'hello world!' }, 'hello world')
// console.log(hello)

ReactDOM.render(
  <Router />,
  document.getElementById('root')
)