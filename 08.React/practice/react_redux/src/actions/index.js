/**
 * action 类型常量
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

/**
 * action 创建函数
 */

export const addTodo = text => ({
  type: ADD_TODO,
  text
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})