import AppDispatcher from '../dispatcher/appDispatcher'

export const addNewItem = (text) => {
  AppDispatcher.dispatch({ //调用Dispatcher获取actionType为ADD_NEW_ITEM的Action
    actionType: 'ADD_NEW_ITEM',
    text: text
  })
}

export const delItem = () => {
  AppDispatcher.dispatch({
    actionType: 'DEL_ITEM'
  })
}