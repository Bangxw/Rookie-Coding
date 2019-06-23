import React, { Component } from 'react'
import { connect } from 'react-redux'

class AddTodo extends Component {
  onSubmit(ev) {
    ev.preventDefault()

    const input = this.input
    if (!input.value.trim()) {
      return
    }

    this.props.onAdd(input.value)
    input.value = ''
  }

  refInput(node) {
    this.input = node
  }

  render() {
    return (
      <div className="add-todo">
        <form onSubmit={this.onSubmit}>
          <input className="new-todo" ref={this.refInput} />
          <button className="add-btn" type="submit">
            添加
          </button>
        </form>
      </div>
    )
  }
}

const mapDiaptchToProps = dispatch => {
  return {
    onAdd: (text) => {
      dispatch(addToDo(text))
    }
  }
}

export default connect(null, mapDispatchProps)(AddTodo)