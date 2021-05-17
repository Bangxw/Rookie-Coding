import React from 'react'
import '@styles/tic.tac.toe.css'

// 单独的 button
class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={this.props.onClick}
      >
        {/* TODO */}
        {this.props.value}
      </button>
    )
  }
}

// 棋盘的9个squares
class Board extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  renderSquare(i) {
    return (
      <Square
        onClick={() => this.handleClick(i)}
        value={this.state.squares[i]}
      />
    )
  }

  handleClick(i) {
    const squares = this.state.squares.slice()
    squares[i] = 'X'
    this.setState({squares: squares,})
  }

  render() {
    const status = 'Next player: x'
    return (
      <div>
        <div className="status">{status}</div><br/>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <div></div>
        </div>
      </div>
    )
  }
}
