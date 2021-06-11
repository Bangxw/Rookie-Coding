import React from 'react'
import PropTypes from 'prop-types'

const Hello = props => (
  <h1>{props.children}</h1>
)

export default class Greeting extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Hello>Hello, React~</Hello>
    )
  }
}

Hello.propTypes = {
  name: PropTypes.string,
}