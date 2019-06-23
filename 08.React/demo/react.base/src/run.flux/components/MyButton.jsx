import React, { Component } from 'react'
import * as ButtonActions from '../actions/ButtonActions'

class MyButton extends Component {
  constructor(props) {
    super(props)

    this.newItem = this.newItem.bind(this)
  }

  newItem() {
    ButtonActions.addNewItem('new Item')
  }

  delItem() {
    ButtonActions.delItem()
  }

  render() {
    let items = this.props.items;

    return (
      <div>
        <ul>
          {
            items.map(function (listitem, i) {
              return <li key={i}>{listitem}</li>
            })
          }
        </ul>
        <button onClick={this.newItem}>New Item</button> <br/>
        <button onClick={this.delItem}>Delete Item</button>
      </div>
    )
  }
}

export default MyButton