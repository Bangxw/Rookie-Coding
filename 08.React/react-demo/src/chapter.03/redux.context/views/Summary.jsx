import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Store from '../Store'

class Summary extends Component {
  render() {
    return(
      <div> Total Count: { this.props.sum }</div >
    )
  }
}

Summary.propTypes = {
  sum: PropTypes.number.isRequired
}

class SummaryContainer extends Component {
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

    return { sum }
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState !== this.state.sum
  }

  componentDidMount() {
    Store.subscribe(this.onChange)
  }

  componentWillUnmount() {
    Store.unsubscribe(this.onChange)
  }

  render() {
    return (
      <Summary sum={this.state.sum} />
    )
  }
}

export default SummaryContainer