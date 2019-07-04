import React from 'react'
import { Provider } from 'react-redux'
import Store from './Store'
import { view as Todos } from './todos'
// import { view as Filters } from './filters'

const TodoComp = () => {
  return (
    <Provider store={Store}>
      <Todos />
    </Provider>
  )
}

export default TodoComp