import React from 'react'

const { Provider, Consumer } = React.createContext()

function Hello() {
  return (
    <Consumer>{ data => <span>{data}</span> }</Consumer>
  )
}

function Subnode() {
  return (
    <Hello></Hello>
  )
}

function Node() {
  return (
    <Subnode></Subnode>
  )
}

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }

  render() {
    return (
      <Provider value="同志们辛苦啦">
        <Node></Node>
      </Provider>
    )
  }
}