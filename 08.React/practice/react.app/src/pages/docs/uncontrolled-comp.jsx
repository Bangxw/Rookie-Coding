import React from 'react'

export default class FormComp extends React.Component {
  constructor(props) {
    super(props)
    this.textRef = React.createRef()
  }

  handleChange = e => {
    console.log(this.textRef.current.value)
  }

  render() {
    return (
      <input type="text" ref={this.textRef} onChange={this.handleChange} />
    )
  }
}