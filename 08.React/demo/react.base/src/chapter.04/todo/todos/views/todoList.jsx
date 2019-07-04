import React from 'react'
import { List, Checkbox, Button } from 'antd'
import { connect } from 'react-redux'
import { FilterTypes } from '../../constants'
import { toggleTodo, removeTodo } from '../actions'
// import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types'
import { view as Filter } from '../../filter'

const TodoList = ({ todos, onToggleTodo, onRemoveTodo }) => {
  return (
    <div>
      <List
        dataSource={todos}
        bordered
        header={<Filter></Filter>}
        renderItem={item => (
          <List.Item actions={[<Button type="link" onClick={() => onRemoveTodo(item.id)}>Delete</Button>]}>
            <Checkbox checked={item.completed} onChange={() => onToggleTodo(item.id)}><label style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>{item.text}</label></Checkbox>
          </List.Item>
        )}
      />
    </div>
  )
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired
}

const selectVisibleTodos = (todos, filter) => {
  switch (filter) {
    case FilterTypes.ALL:
      return todos
    case FilterTypes.COMPLETED:
      return todos.filter(item => item.completed)
    case FilterTypes.UNCOMPLETED:
      return todos.filter(item => !item.completed)
    default:
      throw new Error('filter is not defined')
  }
}

const mapStateToProps = (state) => {
  return {
    todos: selectVisibleTodos(state.todos, state.filter)
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onToggleTodo: (id) => {
//       dispatch(toggleTodo(id))
//     },
//     onRemoveTodo: (id) => {
//       dispatch(removeTodo(id))
//     }
//   }
// }

// const mapDispatchToProps = dispatch => bindActionCreators({
//   onToggleTodo: toggleTodo,
//   onRemoveTodo: removeTodo
// }, dispatch)

const mapDispatchToProps = {
  onToggleTodo: toggleTodo,
  onRemoveTodo: removeTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)