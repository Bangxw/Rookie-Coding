import React from 'react'

export default class State extends React.PureComponent {
  state = {
    obj: {
      number: 0
    }
  }

  handleClick = () => {
    // 错误做法
    // newObj 和 obj 指向同一地址，比对的时候检测不到数据的改变
    const newObj = this.state.obj
    newObj.number = Math.ceil(Math.random() * 5)
    this.setState({
      obj: newObj
    })

    // 正确做法 构建新的对象
    this.setState({
      obj: { ...this.state.obj, number: Math.ceil(Math.random() * 5) }
    })
  }

  render() {
    const hello = (
      <h1 title='hello world!'>hello world</h1>
    )
    console.log(hello)

    return (
      <div>
        { hello }
        <h1>随机数：{this.state.obj.number}</h1>
        <button onClick={this.handleClick}>random</button>
      </div>
    )
  }
}