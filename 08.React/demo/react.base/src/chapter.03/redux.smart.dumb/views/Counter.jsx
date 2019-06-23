import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Store from '../Store'
import * as Actions from '../Action'

const buttonStyle = {
  margin: '10px'
}

class Counter extends Component {
  render() {
    const { caption, onIncrement, onDecrement, value } = this.props

    return (
      <div>
        <span>{caption} count: {value}</span>
        <button style={buttonStyle} onClick={onIncrement}>+</button>
        <button style={buttonStyle} onClick={onDecrement}>-</button>
      </div>
    )
  }
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

class CounterContainer extends Component {
  constructor(props) {
    super(props)

    this.onIncrement = this.onIncrement.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.onChange = this.onChange.bind(this)
    this.getOwnState = this.getOwnState.bind(this)

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
    return (nextProps.caption !== this.props.caption) || (nextState.value !== this.state.value)
  }

  componentDidMount() {
    Store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    Store.unsubscribe(this.onChange)
  }

  render() {
    return <Counter
      caption={this.props.caption}
      onIncrement={this.onIncrement}
      onDecrement={this.onDecrement}
      value={this.state.value} />
  }
}

CounterContainer.propTypes = {
  caption: PropTypes.string.isRequired
}

export default CounterContainer;