import React from 'react'
import PropTypes from 'prop-types'

const Hello = props => {
  return (
    <div>组件的子节点 - {props.children}</div>
  )
}

export default class Props extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    return (
      <Hello fn={() => console.log('func.isRequired')}>来自父节点的内容</Hello>
    )
  }
}

Hello.propTypes = {
  a: PropTypes.number,
  fn: PropTypes.func.isRequired,
  tag: PropTypes.element,
  filter: PropTypes.shape({
    area: PropTypes.string,
    price: PropTypes.number
  })
}