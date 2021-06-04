import React from 'react'

import cat from '@images/cat.png'

const withMouse = WrappedComp => {
  class Mouse extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        xPos: 0, yPos: 0
      }
    }

    componentDidMount() {
      window.addEventListener('mousemove', this.handleMouseMove)
    }

    componentWillUnmount() {
      window.removeEventListener('mousemove', this.handleMouseMove)
    }

    handleMouseMove = e => {
      this.setState({
        xPos: e.clientX, yPos: e.clientY
      })
    }

    render() {
      return <WrappedComp {...this.state} />
    }
  }

  Mouse.displayName = `WithMouse${getDisplayName(WrappedComp)}`

  return Mouse
}

function getDisplayName(wrappedComponent) {
  return wrappedComponent.displayName || wrappedComponent.name || 'Component'
}

const Cat = props => (
  <img src={cat} alt='' style={{
    position: 'absolute', top: props.yPos + 10, left: props.xPos + 10
  }} />
)

const Position = props => (
  <span>{props.xPos}, {props.yPos}</span>
)


const MousePosition = withMouse(Position)
const MouseCat = withMouse(Cat)

export default class HOC extends React.Component {
  render() {
    return (
      <div>
        <h4>高阶组件</h4>
        <MousePosition />
        <MouseCat />
      </div>
    )
  }
}