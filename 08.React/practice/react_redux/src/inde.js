import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'

/** Todo
 * 整个应用的数据：如下
 * 应用有两个操作：
 * 【add todo】: 增加一项 todo item
 * 【toggle todo】: 切换 todo 的状态，标记是否完成
 */

const initData = {
  todos: [{
    id: 0,
    text: 'Consider using Redux',
    completed: true,
  }, {
    id: 1,
    text: 'Keep all state in a single tree',
    completed: false
  }]
}


// 创建 actions， 每个action必须具备 type 属性
const actions = {
  addTodo: text => ({ // 新增的时候接受 text 参数，新增项的文本
    type: 'ADD_TODO',
    text
  }),
  toggleTodo: id => ({ // 切换状态的时候根据 唯一表示 id 操作
    type: 'TOGGLE_TODO',
    id
  })
}

// 创建 reducer, 需传入 state, action
// 第一次运行将赋值原始数据 ⇨ state : { todos: initData.todos }
// 后续的 state 将是上一次经过一些操作之后的数据
const reducer = (state = initData, action) => {
  switch (action.type) {
    // 数据在 reducer中才会发生变化，action只是派发 动作的指令
    case 'ADD_TODO':		// 操作一：新增
      const todos = state.todos.slice() // 注意：遵循纯函数原则，这里使用深拷贝的数据，基于参数去计算新的数据，尽量不影响源数据。不理解的话了解一下纯函数和非传函数的区别
      todos.push({
        id: action.id || todos.length,
        text: action.text,
        completed: false
      })
      return { todos }
    case 'TOGGLE_TODO':		// 操作二：改变状态
      return { salary: state.salary -= 100 }
    default:	// 如果type匹配不上，就返回默认值
      return state
  }
}

// 创建store
const store = createStore(reducer)


// 订阅 store, state的变化会通知给view
store.subscribe(() => {
  console.log(store.getState())
})

// 派发3个action，更新store
store.dispatch(actions.increment())	// { salary: 11000 }
store.dispatch(actions.increment())	// { salary: 11000 }
store.dispatch(actions.decrement())	// { salary: 11000 }


ReactDOM.render(
  <div>Hello, Redux</div>,
  document.getElementById('root')
)