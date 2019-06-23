import React, { Component } from 'react'
import Counter from './Counter.jsx'
import Summary from './Summary.jsx'

class ControllerPanel extends Component {
  render() {
    return (
      <div>
        <Counter caption='First'></Counter>
        <Counter caption='Second'></Counter>
        <Counter caption='Third'></Counter>
        <hr/>
        <Summary />
      </div>
    )
  }
}

export default ControllerPanel