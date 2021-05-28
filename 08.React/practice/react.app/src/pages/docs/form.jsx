import React from 'react'

export default class FormComponent extends React.Component {
  constructor(props) {
    super(props)
    this.txtRef = React.createRef()
  }

  componentDidUpdate() {
    console.log(this.txtRef.current.value)
  }

  render() {
    return (
      <>
        <input type="text" ref={this.txtRef} />
        <button onClick={() => this.onIncrement} />
      </>
    )
  }
}