import React from 'react'
import PropTypes from 'prop-types'

const TodoList = (props) => {
  return (
    <ul>
      { props.todos.map(item => (
        <li
          key={item.id}
          onClick={() => { props.onTodoClick(item.id) }}
          style={{
            textDecoration: item.completed ? 'line-through' : 'none'
          }}>{item.id} - {item.text}</li>
      ))}
    </ul>
  )
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList