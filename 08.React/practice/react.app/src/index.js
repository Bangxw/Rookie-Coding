import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/index.css'
// import Game from '@pages/tic-tac-toe'
// import DocsComponent from '@pages/docs'
import Comment from '@pages/comment'

// const hello = React.createElement('h1', { title: 'hello world!' }, 'hello world')

ReactDOM.render(
  <Comment />,
  document.getElementById('root')
)