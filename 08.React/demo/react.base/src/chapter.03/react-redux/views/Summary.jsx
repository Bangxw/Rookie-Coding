import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Summary({ value }) {
  return (
    <div>Total count: {value}</div>
  )
}

Summary.Protypes = {
  value: PropTypes.number.isRequired
}

function mapStateToProps(state) {
  let sum = 0
  for (const key in state) {
    if (state.hasOwnProperty(key)) {
      sum += state[key]
    }
  }
  return { value: sum }
}

export default connect(mapStateToProps)(Summary)