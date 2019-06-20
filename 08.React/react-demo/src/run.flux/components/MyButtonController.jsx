import React, { Component } from 'react'
import MyButton from './MyButton'
import ListStore from '../store/ListStore'

class MyButtonController extends Component {
  constructor(props) {
    super(props) // 把props作为参数传递到Super(), 这样在constructor里即可以访问this.props

    this.state = {
      items: []
    }
    this._onChange = this._onChange.bind(this)
  }

  componentDidMount() {
    // 组件挂在完后绑定组件的私有方法_onchange到store, 之后liststore状态变化即可通知组件调用_onChange方法进行改变
    ListStore.addChangeListener(this._onChange)
  }

  componentWillUnmount() {
    ListStore.removeChangeListener(this._onChange)
  }

  _onChange() {
    this.setState({
      items: ListStore.getAll()
    })
  }

  render() {
    return (
      <MyButton
        items={this.state.items}
      ></MyButton>
    )
  }
}

export default MyButtonController