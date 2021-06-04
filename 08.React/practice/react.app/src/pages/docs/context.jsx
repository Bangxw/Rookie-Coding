import React from 'react'

const { Provider, Consumer } = React.createContext()

const Child = props => {
  return (
    <div className="child">
      <Consumer>
        {
          data => (<span>我是子节点 {data}</span>)
        }
      </Consumer>
    </div>
  )
}

const SubNode = props => {
  return (
    <div className="subnode">
      <Child />
    </div>
  )
}

const Node = props => {
  return (
    <div className="node">
      <SubNode />
    </div>
  )
}

export default class ContextComp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'Hello, React'
    }
  }
  render() {
    return (
      <Provider value={this.state.msg}>
        <div className="top">
          <Node />
        </div>
      </Provider>
    )
  }
}