import React, { Component, PropTypes } from 'react'

const buttonStyle = {
  margin: '10px'
}

class Counter extends Component {

  constructor(props) {
    console.log('enter constructor: ' + props.caption)
    super(props)

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButoon.bind(this)

    this.state = {
      count: props.initValue
    }
  }

  onClickIncrementButton() {
    this.setState({ count: this.state.count + 1 })
  }

  onClickDecrementButton() {
    this.setState({ count: this.state.count - 1 })
  }

  render() {
    console.log('enter render ' + this.props.caption)
    const { caption } = this.props
    return (
      <div>
        <button style={buttonStyle} onclick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onclick={this.onClickDecrementButoon}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    )
  }
}

Counter.prototype = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number
}

Counter.defaultProps = {
  initValue: 0
}

export default Counter