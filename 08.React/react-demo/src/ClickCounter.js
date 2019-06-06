import React, { Component } from 'react' // React 一定要导入，因为JSX最终会被转译成依赖于React的表达式

// Component是所有组件的基类， 提供了所有组件共有的功能
class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this)
    this.state = { count: 0 }
  }

  onClickButton() {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    const counterStyle = {
      margin: '16px'
    }
    return (
      <div style={counterStyle}>
        <button onClick={this.onClickButton}>Click Me</button>
        <p>Click Count: {this.state.count}</p>
      </div>
    )
  }
}

export default ClickCounter