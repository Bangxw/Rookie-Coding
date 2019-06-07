import React, { Component } from 'react'
import Counter from './Counter'

const style = {
  margin: '20px'
}

class ControlPanel extends Component {
  render() {
    console.log('enter ControlPanel render')
    return (
      <div style={style}>
        <Counter caption="First"></Counter>
        <Counter caption="Second" initValue={10}></Counter>
        <Counter caption="Third" initValue={20}></Counter>
        <button onClick={() => this.forceUpdate()}>
          Click me to re-render;
        </button>
      </div>
    )
  }
}

export default ControlPanel