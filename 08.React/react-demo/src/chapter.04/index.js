import React, { Component } from 'react'
import { Provider } from 'reace-redux'
import TodoApp from './TodoApp'

import store from './Store'

class Comp extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodoApp />
      </Provider>
    )
  }
}

export default Comp