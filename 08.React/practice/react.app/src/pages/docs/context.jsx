import React from 'react'

const ThemeContext = React.createContext('light')
export default class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark">
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemeButton />
    </div>
  )
}

class ThemeButton extends React.Component {
  static contextType = ThemeContext
  render() {
    console.log(this.context)
    return <button theme={this.context} />
  }
}