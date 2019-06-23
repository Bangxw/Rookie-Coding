import React, { Component } from 'react'
import Store from '../Store'

class Summary extends Component {

  constructor(props) {
    super(props)

    this.onChange = this.onChange.bind(this)

    this.state = this.getOwnState()
  }

  onChange() {
    this.setState(this.getOwnState())
  }

  getOwnState() {
    const state = Store.getState()
    let sum = 0
    for (const key in state) {
      if (state.hasOwnProperty(key)) {
        sum += state[key]
      }
    }
    return {
      sum
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.sum !== this.state.sum
  }

  componentDidMount() {
    Store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    Store.unsubscribe(this.onChange)
  }

  render() {
    const sum = this.state.sum
    return (
      <div>Total count: {sum}</div>
    )
  }
}

export default Summary