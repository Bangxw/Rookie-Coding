import React from 'react'
import { Form, Input, Button } from 'antd'

class CommentInfo extends React.Component {
  state = {
    userName: '',
    userContent: ''
  }

  handleChange = e => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
  }

  handleClick = e => {
    e && e.preventDefault()
    const { userName, userContent } = this.state
    if(userName.trim() === '' || userContent.trim() === '') return
    this.props.newComment(userName, userContent)
    this.setState({
      userName: '',
      userContent: ''
    })
  }

  render() {
    const { userName, userContent } = this.state
    return (
      <Form>
        <Form.Item>
          <Input type='text' placeholder="请输入评论人" value={userName} name="userName" onChange={this.handleChange} />
        </Form.Item>
        <Form.Item>
          <Input.TextArea placeholder="请输入评论内容" showCount maxLength={100} value={userContent} name="userContent" onChange={this.handleChange} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={this.handleClick}>发表评论</Button>
        </Form.Item>
      </Form>
    )
  }
}

function CommentList({ comments }) {
  const renderList = () => {
    if (comments.length === 0) return (<p>暂无评论，快去评论吧~</p>)
    return (
      <ul>
        { comments.map(item => (
          <li key={item.id}>
            <h3>评论人：{item.name}</h3>
            <p>评论内容：{item.content}</p>
          </li>
        ))}
      </ul>
    )
  }

  return (
    <div>{renderList()}</div>
  )
}

export default class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: []
    }
  }

  newComment = (userName, userContent) => {
    const { comments } = this.state
    this.setState({
      comments: [{
        id: comments.length + 1,
        name: userName,
        content: userContent
      }, ...comments]
    })
  }

  render() {
    return (
      <div className="comment">
        <CommentInfo newComment={this.newComment} />
        <CommentList comments={this.state.comments} />
      </div>
    )
  }
}