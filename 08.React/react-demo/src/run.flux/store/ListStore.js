import EventEmitter from 'events'

class ListStore extends EventEmitter {

  constructor(props) {
    super(props)
    this.items = []
  }

  getAll() {
    return this.items
  }

  addNewItemHandler(text) {
    this.items.push(text)
  }

  delItemHandle() {
    this.items.pop()
  }

  emitChange() { //提交变化
    this.emit('change')
  }

  addChangeListener(callback) {
    this.on('change', callback)
  }

  removeChangeListener(callback) {
    this.removeListener('change', callback)
  }
}

//new一个listStore作为单例暴露给其它模块使用
let listStore = new ListStore()

export default listStore