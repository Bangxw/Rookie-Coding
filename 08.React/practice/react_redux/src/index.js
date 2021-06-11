import React from 'react'
import ReactDOM from 'react-dom'

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

class AddTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e && e.preventDefault()
    const { text } = this.state
    if (!text.trim()) return
    this.props.addTodo(text)
    this.setState({
      text: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} >
        <input name="text" value={this.state.text} onChange={this.handleChange} />
        <button type="submit"> Add Todo </button>
      </form>
    )
  }
}

const TodoList = props => {
  console.log(props)
  return (
    <ul>
      { props.todos.map(item => (
        <li key={item.id} style={{
          textDecoration: item.completed ? 'line-through' : 'none'
        }}>{item.text}</li>
      ))}
    </ul>
  )
}

class App extends React.Component {
  state = {
    todos: initData.todos
  }

  handleAddTodo = text => {
    this.setState((state, props) => {
      const todos = state.todos.slice()
      todos.push({
        text: text,
        completed: false,
        id: todos.length
      })
      return { todos }
    })
  }

  render() {
    return (
      <div className="app">
        <AddTodo addTodo={this.handleAddTodo} />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)