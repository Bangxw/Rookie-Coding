import React from 'react'
import * as Actions from '../Actions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const buttonStyle = {
  margin: '10px'
}

function Counter({ caption, onIncrement, onDecrement, value }) {
  return (
    <div>
      <span>{caption} count: {value}</span>
      <button style={buttonStyle} onClick={onIncrement}>+</button>
      <button style={buttonStyle} onClick={onDecrement}>-</button>
    </div>
  )
}

Counter.propTypes = {
  caption: PropTypes.string.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired
}

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}

// connect 连接容器组件 和傻瓜组件（Counter）, 最后产生容器组件

/**
 * 1. 把Store状态转化为内层组件的props, 函数mapSteteToProps
 * 2. 把内层傻瓜组件的用户动作转化为派送给Store的动作
 */

export default connect(mapStateToProps, mapDispatchToProps)(Counter)