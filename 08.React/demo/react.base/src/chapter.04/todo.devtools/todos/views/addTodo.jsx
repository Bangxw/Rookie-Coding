import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

class AddTodo extends Component {

  constructor(props) {
    super(props)

    this.refInput = this.refInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onInputChange = this.onInputChange.bind(this)

    this.state = {
      value: ''
    }
  }


  handleSubmit(ev) {
    ev.preventDefault()
    // const { input } = this.input
    // if (!input.value.trim()) {
    //   return
    // }

    // this.props.onAdd(input.value)
    // input.value = ''

    const input = this.state.value
    if (!input.trim()) return

    this.props.onAdd(input)
    this.setState({
      value: ''
    })
  }

  onInputChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  refInput(node) {
    this.input = node
  }

  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 24 },
    }
    return (
      <div>
        <Form layout="inline" {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item>
            {/* <Input ref={this.refInput} placeholder='add new item' /> */}
            <Input onChange={this.onInputChange}  placeholder='add new item' value={this.state.value} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              添加
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAdd: (text) => {
      dispatch(addTodo(text))
    }
  }
}

export default connect(null, mapDispatchToProps)(AddTodo)