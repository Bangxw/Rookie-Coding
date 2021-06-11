import React from 'react'
import ReactDOM from 'react-dom'

import '@styles/index.css'
import Router from '@configs/router.config'

// const hello = React.createElement('h1', { title: 'hello world!' }, 'hello world')
// console.log(hello)

import { Provider } from 'react-redux'
import { createStore } from 'redux'

const reducer = (state = { salary: 10000 }, action) => {
  switch(action.type) {
    case '涨工资': return { salary: state.salary += 1000 }
    case '扣工资': return { salary: state.salary -= 100 }
    default: return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)