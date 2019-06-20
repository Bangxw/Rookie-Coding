import React, { Component } from 'react'
import * as Actions from '../Actions'
import Store from '../Store'

const buttonStyle = {
  margin: '20px'
}

class Counter extends Component {

  constructor(props) {
    super(props)

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.getOwnState = this.getOwnState.bind(this)
    this.onChange = this.onChange.bind(this)

    this.state = this.getOwnState()
  }

  getOwnState() {
    return {
      value: Store.getState()[this.props.caption]
    }
  }

  onIncrement() {
    Store.dispatch(Actions.increment(this.props.caption))
  }

  onDecrement() {
    Store.dispatch(Actions.decrement(this.props.caption))
  }

  onChange() {
    this.setState(this.getOwnState())
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps !== this.props.caption || (nextState !== this.state.value))
  }

  componentDidMount() {
    Store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    Store.unsubscribe(this.onChange)
  }

  render() {
    const { caption } = this.props
    const { value } = this.state

    return (
      <div>
        <span>{caption} count: {value}</span>
        <button style={buttonStyle} onClick={this.onIncrement}>+</button>
        <button style={buttonStyle} onClick={this.onDecrement}>-</button>
      </div>
    )
  }
}

export default Counter