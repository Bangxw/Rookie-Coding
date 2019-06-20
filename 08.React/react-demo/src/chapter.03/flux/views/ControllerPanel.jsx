import React, { Component } from 'react'
import Counter from './Counter'
import Summary from './Summary'

class ControllerPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption="First" />
        <Counter caption="Second" />
        <Counter caption="Third" />
        <hr />
        <Summary />
      </div>
    )
  }
}

export default ControllerPanel