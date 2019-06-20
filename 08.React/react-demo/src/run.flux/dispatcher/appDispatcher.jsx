import { Dispatcher } from 'flux'
import ListStore from '../store/ListStore'
import listStore from '../store/ListStore';

let AppDispatcher = new Dispatcher()

//调用register方法注册接收到各种actionType的Action之后的回调函数
AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text)
      ListStore.emitChange()
      break;
    case 'DEL_ITEM':
      ListStore.delItemHandle()
      listStore.emitChange()
      break;
    default: // no op
  }
})

export default AppDispatcher