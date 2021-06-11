import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e && e.preventDefault()
    const { input } = this.state
    if (!input.trim()) return
    this.props.dispatch(addTodo(input))
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input name="input" value={this.state.input} onChange={this.handleChange} />
        <button type="submit"> Add Todo </button>
      </form>
    )
  }
}

AddTodo = connect()(AddTodo)

export default AddTodo