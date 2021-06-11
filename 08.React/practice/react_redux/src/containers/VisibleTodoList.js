import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

// 将state映射为组件的props, 也就是在组件内部可以通过 this.props 获取state
const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

// 将action传给组件的props, 也就是在组件内部可以通过 this.props. 派发事件
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList