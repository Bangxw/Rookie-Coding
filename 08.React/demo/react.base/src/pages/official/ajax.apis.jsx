import React from 'react'

class AjaxAndApis extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://example.com/')
      .then(res => res.json())
      .then((result) => {
        console.log(result)
      })
  }

  render() {
    return (
      <div>Hello World!</div>
    )
  }
}

export default AjaxAndApis