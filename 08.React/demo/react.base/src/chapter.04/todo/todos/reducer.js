import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

export default (state = [], action) => {
  switch (action.type) {
    // 针对 action.type多有可能值的case
    case ADD_TODO: {
      return [{
        id: action.id,
        text: action.text,
        completed: false
      }, ...state] // 不能用Push 或者 unshift ，会改变原来的数组
    }

    case TOGGLE_TODO: {
      return state.map((todoItem) => {
        if (todoItem.id === action.id)
          return { ...todoItem, completed: !todoItem.completed }
        else
          return todoItem
      })
    }

    case REMOVE_TODO: {
      return state.filter((todoItem) => {
        return todoItem.id !== action.id
      })
    }

    default: {
      return state
    }
  }
}