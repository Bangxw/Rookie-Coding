import React, { Component } from 'react'
import PropTypes from 'prop-types'

const buttonStyle = {
  margin: '10px'
}

/** 装载过程：
 * 1. constructor
 * 2. getInitialState
 * 3. getDefaultProps
 * 4. componentWillMount
 * 5. render
 * 6. componentDidMount
 */

/** 更新过程
 * 1. componentWillReceiveProps 父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程
 * 2. shouldComponentUpdate
 * 3. componentWillUpdate
 * 4. render
 * 5. componentDidUpdate
 */

/** 卸载过程
 * 1. componentWillUnmount
 */

// const Sample = React.createClass({
//   getInitiaState: function () {
//     return { foo: 'bar' }
//   },
//   getDefaultProps: function () {
//     return { sampleProp: 0 }
//   }
// })

class Counter extends Component {

  constructor(props) {
    console.log('2.--- enter constructor: ' + props.caption)
    super(props)

    this.onClickIncrementButton = this.onClickIncrementButton.bind(this)
    this.onClickDecrementButton = this.onClickDecrementButton.bind(this)

    this.state = {
      count: props.initValue
    }
  }

  onClickIncrementButton() {
    this.updateCount(true)
  }

  onClickDecrementButton() {
    this.updateCount(false)
  }

  componentWillMount() {
    console.log('enter componentWillMount ' + this.props.caption)
  }

  componentDidMount() {
    console.log('enter componentDidMount ' + this.props.caption)
  }

  componentWillReceiveProps(nextProps) { // 父组件的render函数被调用，在render函数里面被渲染的子组件就会经历更新过程
    // setState时， 要判断nextProps和this.props上一次渲染的值对比
    console.log('enter componentWillReceiveProps ' + this.props.caption)
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
  }

  updateCount(isInCrement) {
    const previousValue = this.state.count
    const newValue = isInCrement ? previousValue + 1 : previousValue - 1
    this.setState({
      count: newValue
    })
    this.props.onUpdate(newValue, previousValue)
  }

  render() {
    console.log('enter render ' + this.props.caption)
    const { caption } = this.props
    return (
      <div>
        <button style={buttonStyle} onClick={this.onClickIncrementButton}>+</button>
        <button style={buttonStyle} onClick={this.onClickDecrementButton}>-</button>
        <span>{caption} count: {this.state.count}</span>
      </div>
    )
  }
}

Counter.proptype = {
  caption: PropTypes.string.isRequired,
  initValue: PropTypes.number,
  onUpdate: PropTypes.func
}

Counter.defaultProps = { // 添加到类属性，而不是类实例的属性
  initValue: 1,
  onUpdate: f => f // 默认是一个什么都不做的函数
}

export default Counter