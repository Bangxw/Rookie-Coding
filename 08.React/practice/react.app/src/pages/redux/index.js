import React from 'react'
import { connect } from 'react-redux'

export default class ReduxPage extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <h4>当前工资: {this.props.salary}</h4>
        <button onClick={this.props.salaryIncrease}>涨工资</button>
        <button onClick={this.props.salaryDecrease}>扣工资</button>
      </div>
    )
  }
}

const actions = {
  increase: () => ({
    type: '涨工资'
  }),
  decrease: () => ({
    type: '扣工资'
  })
}

function mapStateToProps(state) {
  return {
    salary: state.salary
  }
}

function mapDispatchToProps(dispatch) {
  return {
    salaryIncrease: () => dispatch(actions.increase()),
    salaryDecrease: () => dispatch(actions.decrease())
  }
}

ReduxPage = connect(mapStateToProps, mapDispatchToProps)(ReduxPage)