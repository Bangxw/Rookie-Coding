import React, { Component } from 'react'
import Counter from './Counter'

const style = {
  margin: '20px'
}

class ControlPanel extends Component {
  constructor(props) {
    super(props)

    this.onCounterUpdate = this.onCounterUpdate.bind(this)

    this.initValue = [0, 10, 20]
    const initSum = this.initValue.reduce((a, b) => a + b, 0)

    this.state = {
      sum: initSum
    }
  }

  onCounterUpdate(newValue, previousValue) {
    const valueChange = newValue - previousValue
    this.setState({ sum: this.state.sum + valueChange })
  }

  render() {
    console.log('1.--- enter ControlPanel render')
    return (
      <div style={style}>
        <Counter onUpdate={this.onCounterUpdate} caption="First"></Counter>
        <Counter onUpdate={this.onCounterUpdate} caption="Second" initValue={this.initValue[1]}></Counter>
        <Counter onUpdate={this.onCounterUpdate} caption="Third" initValue={this.initValue[1]}></Counter>
        <hr />
        <div>Total Count: {this.state.sum}</div>
        <button onClick={() => this.forceUpdate()}>
          Click me to re-render;
        </button>
      </div>
    )
  }
}

export default ControlPanel