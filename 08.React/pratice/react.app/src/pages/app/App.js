import React from 'react';
import { PropTypes, } from 'prop-types'
import logo from '@images/logo.svg';
import '@styles/App.css';
import { Jumbotron, Form, Button, Row, Col, } from 'react-bootstrap'
import { connect, } from 'react-redux'
import { INCREASE, DECREASE, } from '@actions/common'

class App extends React.Component {
  static getDerivedFromProps(props, state) {
    return null
  }

  constructor(props) {
    super(props)
    this.state = { msg: 'Learn React', }
    this.linkHandle = this.linkHandle.bind(this)
  }

  componentWillMount() {
    console.log('component::will::mount')
  }

  componentDidMount() {
    console.log('component::did::mount')
  }

  componentWillReceiveProps() {
    console.log('component::will::receive::props')
  }

  shouldComponentUpdate() {
    console.log('should::component::update')
    return true
  }

  componentWillUpdate() {
    console.log('component::will::update')
  }

  componentDidUpdate() {
    console.log('component::did::update')
  }

  componentWillUnmount() {
    console.log('component::will::unmount')
  }

  linkHandle(e) {
    e && e.preventDefault()
    this.props.PayIncrease()
  }

  render() {
    return (
      <div className="App" >
        <header className="App-header">
          <img alt="logo" className="App-logo" src={logo} />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            onClick={this.linkHandle}
            rel="noopener noreferrer"
            target="_blank"
          >
            {this.props.wage}
          </a>
        </header>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    wage: state,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    PayIncrease: () => dispatch({
      type: INCREASE,
    }),
    PayDecrease: () => dispatch({
      type: DECREASE,
    }),
  }
}

class ToDoForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value, })
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value)
    event.preventDefault()
  }

  render() {
    return (
      <div className="todoForm">
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={1}>
              <span className="item">Item</span>
            </Form.Label>
            <Col sm={5}>
              <Form.Control onChange={this.handleChange} placeholder="Todo Item" type="text" value={this.state.value} />
            </Col>
            <Col sm={2}>
              <Button type="submit" variant="primary">Add</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

class ToDoForm2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: '', }
    this.input = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    alert(`A name was submitted: ${this.input.current.value}`)
  }

  render() {
    return (
      <div className="todoform">
        <UserDisplay age={24} name="Jack" />
        <Form onSubmit={this.handleSubmit}>
          <Form.Group as={Row} controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              <span className="item">Item</span>
            </Form.Label>
            <Col sm={5}>
              <Form.Control placeholder="Todo Item" ref={this.input} type="text" />
            </Col>
            <Col sm={5}>
              <Button type="submit" variant="primary">Add</Button>
            </Col>
          </Form.Group>
        </Form>
      </div>
    )
  }
}

const UserDisplay = ({ name, address, age, }) => {
  UserDisplay.defaultProps = {
    name: 'myName',
    age: 100,
    address: '0000 onestreet',
  }

  return (
    <>
      <div>
        <div className="lable"> Name: </div>
        <div>{name}</div>
      </div>
      <div>
        <div className="lable"> Address: </div>
        <div>{address}</div>
      </div>
      <div>
        <div className="lable"> Age: </div>
        <div>{age}</div>
      </div>
    </>
  )
}

UserDisplay.propTypes = {
  name: PropTypes.string.isRequired,
  address: PropTypes.objectOf(PropTypes.string),
  age: PropTypes.number.isRequired,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
