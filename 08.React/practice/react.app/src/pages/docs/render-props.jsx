import React from 'react'
import cat from '@images/cat.png'

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
    return this.props.children(this.state)
  }
}

export default class RenderPropsComp extends React.Component {
  render() {
    return (
      <div>
        <Mouse>{state => <p>{state.xPos}, {state.yPos}</p>}</Mouse>
        <Mouse>
          {state =>
            <img src={cat} alt="" style={{ position: 'absolute', left: state.xPos - 50, top: state.yPos - 51 }} />
          }
        </Mouse>
      </div>
    )
  }
}