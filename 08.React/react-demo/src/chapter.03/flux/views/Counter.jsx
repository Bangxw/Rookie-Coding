import React, { Component } from 'react'
import CounterStore from '../stores/CounterStore'
import * as Actions from '../actions/Action'

class Counter extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: CounterStore.getCounterValues()[props.caption]
    }

    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)
    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onClickDecrementButton() {
    Actions.decrement(this.props.caption)
  }

  onClickIncrementButton() {
    Actions.increment(this.props.caption)
  }

  onChange() {
    const newCount = CounterStore.getCounterValues()[this.props.caption]
    this.setState({
      count: newCount
    })
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange)
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange)
  }

  render() {
    const buttonStyle = {
      margin: '10px',
      marginLeft: '20px'
    }
    const { caption } = this.props

    return (
      <div>
        <span>{caption} count: {this.state.count}</span>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button onClick={this.onClickDecrementButton}>-</button>
      </div>
    )
  }
}

export default Counter