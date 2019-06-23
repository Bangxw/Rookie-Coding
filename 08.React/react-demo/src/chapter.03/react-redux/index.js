import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './Store'
import ControllerPanel from './views/ControllerPanel'

class Comp extends Component {
  render() {
    return (
      <Provider store={store}>
        <ControllerPanel />
      </Provider>
    )
  }
}

export default Comp