import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Provider extends Component {
  getChildContext() {
    return {
      store: this.props.Store
    }
  }

  render() {
    return this.props.children
  }
}

Provider.childContextTypes = {
  store: PropTypes.object
}