import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './actionTypes'

let nextTodoID = 0

export const addToDo = (text) => ({
  type: ADD_TODO,
  completed: false,
  id: nextTodoID++,
  text: text
})

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id: id
})



export const removeTodo = (id) => ({ // 简写
  type: REMOVE_TODO,
  id: id
})