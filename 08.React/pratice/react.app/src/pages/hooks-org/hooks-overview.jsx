import React, { useState, useEffect, } from 'react'

const ChatAPI = {}

class FriendsStatusWithCounter extends React.Component {
  constructor(props) {
    super(props)
    this.state = { count: 0, isOnline: null, }
    this.handleStatusChange = this.handleStatusChange.bind(this)
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
    ChatAPI.subscribeToFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    )
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }

  componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
      this.props.friend.id,
      this.handleStatusChange,
    )
  }

  handleStatusChange(status) {
    this.setState({
      inOnline: status.isOnline,
    })
  }

  render() {
    if (this.state.inOnline === null) {
      return 'Loding...'
    }
    return (
      <div>
        <p>You Clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1, })}>Click me</button>
      </div>
    )
  }
}

function HooksExample() {
  // useState和this.state的区别 不一定要是个对象
  const [count, setCount,] = useState(0)

  // 声明多个state变量
  const [age, setAge,] = useState(42)
  const [fruit, setFruit,] = useState('banana')
  const [todos, setTodos,] = useState([{ text: 'Learn Hooks', },])

  useEffect(() => {
    // 使用浏览器的API更新页面标题
    document.title = `You clicked ${count} times`
  })

  const func = test => {
    console.log(test)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

function FriendStatusWithCounter(props) {
  const [Count, setCount,] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${Count} times`
  }, [Count,]) // 仅在count更改时更新

  const [isOnline, setIsOnline,] = useState(null)
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.inOnline)
    }

    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)

    return function cheanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  }, [props.friend.id,]) // 仅在props.friend.id发生变化时，重新订阅

  if (isOnline === null) {
    return 'Loading...'
  }

  return isOnline ? 'Online' : 'offline'
}

// 单个组件中使用多个State Hook或Effect Hook
function Form() {
  // 1. Use the name state varible
  const [name, setName,] = useState('Mary')

  // 2. Use an effect for persisting the form
  useEffect(function persistForm() {
    localStorage.setItem('formData', name)
  })

  // 3. Use the surname state variable
  const [surname, setSurname,] = useState('Poppins')

  // 4. Use an effect for updaing the title
  useEffect(() => {
    document.title = name + ' ' + surname
  })

  return (
    <div>
      <p>You clicked {name + ' ' + surname} times</p>
    </div>
  )
}

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline,] = useState(null)

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange)
    }
  })

  return isOnline
}

function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id)

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id)

  return (
    <li style={{ color: isOnline ? 'green' : 'black', }}>
      {props.friend.name}
    </li>
  )
}

const friendList = [
  { id: 1, name: 'Phoebe', },
  { id: 2, name: 'Rachel', },
  { id: 3, name: 'Rose', },
  { id: 4, name: 'Bob', },
]

function ChatRecipientPicker() {
  const [recipientID, setReciptientID,] = useState(1)
  const isRecipientOnline = useFriendStatus(recipientID)

  return (
    <>
      <span color={isRecipientOnline ? 'green' : 'red'}></span>
      <select
        onChange={e => setReciptientID(Number(e.target.value))}
        value={recipientID}>
        {
          friendList.map(friend => (
            <option key={friend.id} value={friend.id}>
              {friend.name}
            </option>
          ))
        }
      </select>
    </>
  )
}

/**
 * 基础Hook
 */

// useState
function Counter({ initialCount, }) {
  const [count, setCount,] = useState(initialCount)
  return (
    <>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}></button>
      <button>-</button>
    </>
  )
}


export default HooksExample
