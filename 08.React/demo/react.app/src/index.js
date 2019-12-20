import React from 'react'
import ReactDOM from 'react-dom'

import { Provider, } from 'react-redux'
import store from './store'

import '@styles/index.css'

import App from '@pages/app/App';
import Game from '@pages/tic-tac-toe'

/**
 * 1. 创建action
 * 2. 创建reducer
 * 3. 创建store
 */
ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('root')
)
