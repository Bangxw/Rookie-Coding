import React from 'react'

import cat from '@images/cat.png'

function withMouse(WrappedComponent, props) {
  class Mouse extends React.Component {
    state = {
      xPos: 0, yPos: 0
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
      return <WrappedComponent {...this.state} {...props} />
    }
  }

  return Mouse
}

const Cat = props => (
  <img src={cat} alt="" style={{
    position: 'sticky',
    top: props.yPos,
    left: props.xPos
  }} />
)
const Mouse = props => <span>{props.xPos}, {props.yPos}</span>

const EnhancedCat = withMouse(Cat)
const EnhancedMouse = withMouse(Mouse)

export default class Hoc extends React.Component {
  render() {
    return (
      <div>
        <EnhancedCat />
        <EnhancedMouse />
      </div>
    )
  }
}