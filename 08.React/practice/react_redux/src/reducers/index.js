const initData = {
  todos: [
    {
      id: 0,
      text: 'Consider using Redux',
      completed: true,
    },
    {
      id: 1,
      text: 'Keep all state in a single tree',
      completed: false
    }
  ]
}

const todos = (state = initData, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        todos: [
          ...state.todos,
          {
            id: action.id || state.todos.length,
            text: action.text,
            completed: false
          }
        ]
      }
    case 'TOGGLE_TODO':
      return {
        todos: state.todos.map(todo =>
          (todo.id === action.id) ? { ...todo, completed: !todo.completed } : todo
        )
      }
    default:
      return state
  }
}

export default todos