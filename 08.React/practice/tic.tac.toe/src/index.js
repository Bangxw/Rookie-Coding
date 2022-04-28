import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'


class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {/* TODO */}
      </button>
    )
  }
}

class Board extends React.Component {
  renderSquare(i) {
    return <Square />
  }

  render() {
    const status = 'Next player: x'
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          {this.renderSquare(0)}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          {this.renderSquare(0)}
        </div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(0)}
          {this.renderSquare(0)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div></div>
          <ol></ol>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)