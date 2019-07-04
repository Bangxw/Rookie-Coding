import React from 'react'
import AddTodo from './addTodo'
import TodoList from './todoList'
import { Row, Col } from 'antd'

export default () => {
  return (
    <div>
      <Row>
        <Col span={12}>
          <AddTodo />
        </Col>
      </Row>
      <Row>
        <Col span={12}>
          <TodoList />
        </Col>
      </Row>
    </div>
  )
}