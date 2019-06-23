import React, { Component } from 'react'
import SummaryStore from '../stores/SummaryStore'

class Summary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      sum: SummaryStore.getSummary()
    }
    this.onUpdate = this.onUpdate.bind(this)
  }

  onUpdate() {
    this.setState({
      sum: SummaryStore.getSummary()
    })
  }

  componentDidMount() {
    SummaryStore.addChangeListener(this.onUpdate)
  }

  componentWillUnmount() {
    SummaryStore.removeChangelistener(this.onUpdate)
  }

  render() {
    return (
      <div>Total count: {this.state.sum}</div>
    )
  }
}

export default Summary