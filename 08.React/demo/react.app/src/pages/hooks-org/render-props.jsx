import React from 'react'

class Cat extends React.Component {
  render() {
    const { mouse, } = this.props

    return (
      <div id="mouse-cat" style={{ left: mouse.x, top: mouse.y, display: 'block', }}>Cat</div>
    )
  }
}

class Mouse extends React.Component {
  constructor(props) {
    super(props)
    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.state = {
      x: 0,
      y: 0,
    }
  }

  handleMouseMove(e) {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    })
  }

  render() {
    return (
      <div onMouseMove={this.handleMouseMove} style={{ height: '100%', }}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  render() {
    return (
      <>
        <h1>移动鼠标！</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )} />
      </>
    )
  }
}

export { MouseTracker, }
