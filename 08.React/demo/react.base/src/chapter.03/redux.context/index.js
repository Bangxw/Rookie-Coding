import React, { Component } from 'react'
import Provider from './Provider'
import ControllerPanel from './views/ControllerPanel'
import store from './Store'

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