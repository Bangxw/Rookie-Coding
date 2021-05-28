import React from 'react'

import '@styles/tic-tac-toe.css'

function calculatorWinner(square) {
  const lines = [ // 能够获胜的情况枚举
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (square[a] && square[a] === square[b] && square[a] === square[c])
      return {
        player: square[a],  // 获胜的玩家
        line: lines[i] // 获胜的3颗棋子
      }
  }
  return null
}

function calculatorAxis(squareIndex) {
  // 0 1 2
  // 3 4 5
  // 6 7 8
  const x = (squareIndex % 3) + 1
  const y = (squareIndex + 4 - x) / 3   // 3(y-1) + x = squareIndex + 1
  return `${x},${y}`
}

function Square(props) {
  return (
    <button className={'square ' + (props.highlight ? 'highlight' : '')} onClick={props.onClick} >{props.value}</button>
  )
}

class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        highlight={this.props.winnerLine.includes(i)}
        value={this.props.square[i]}
        onClick={() => this.props.onClick(i)}></Square>
    )
  }

  render() {
    return (
      <>
        {
          [0, 1, 2].map((y) => (
            <div className="board-row" key={y}>
              {
                [0, 1, 2].map((x) => (
                  this.renderSquare(3 * y + x) // index = 3y+x
                ))
              }
            </div>
          ))
        }
      </>
    )
  }
}

export default class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        square: Array(9).fill(null),
        axios: '-1,-1'
      }],
      xIsNext: true,
      stepNumber: 0,
      ascendingHistory: true
    }
  }

  handleClick(i) {
    const { xIsNext, history, stepNumber } = this.state
    const historyCopy = history.slice(0, stepNumber + 1) // 回到过去，stepNumber也会变，不这样处理，再走新棋就会出错
    const current = historyCopy[historyCopy.length - 1]
    const square = current.square.slice()
    if (square[i] || calculatorWinner(square)) {
      return
    }

    square[i] = xIsNext ? 'X' : 'O'

    this.setState({
      history: historyCopy.concat([{
        square,
        axios: calculatorAxis(i)
      }]),
      xIsNext: !xIsNext,
      stepNumber: historyCopy.length,
    })
  }

  jumpTo(index) {
    this.setState({
      xIsNext: index % 2 === 0,
      stepNumber: index,
    })
  }

  render() {
    const { xIsNext, history, stepNumber, ascendingHistory } = this.state
    const square = history[stepNumber].square
    const winner = calculatorWinner(square)

    // 状态显示
    let status = `Next player: ${xIsNext ? 'X' : 'O'}`
    if (winner) status = `Winner: ${winner.player}`
    else if (stepNumber === 9) status = 'The game ended in a standoff.' // 直到最后一步还不分胜负

    // 历史记录
    const moves = history.map((item, index) => {
      const desc = index ? `Go to move #${index}， (${item.axios})` : 'Go to game start'
      return (
        <li key={index} className={stepNumber === index ? 'active' : ''}>
          {(index + 1).toString().padStart(2, '0')}. <button onClick={() => this.jumpTo(index)}>{desc}</button>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board winnerLine={winner ? winner.line : []} square={square} onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div><br />
          <button
            className="btn-sort"
            onClick={() => this.setState({ ascendingHistory: !ascendingHistory })}>ascending/descending order</button>
          <ol>
            {ascendingHistory ? moves : moves.reverse()}
          </ol>
        </div>
      </div>
    )
  }
}

// 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。  => 通过 计算squareIndex 实现
// 在历史记录列表中加粗显示当前选择的项目。   => 判断 stepNumber 是不是和history的index 相等
// 添加一个可以升序或降序显示历史记录的按钮。
// 使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。
// 每当有人获胜时，高亮显示连成一线的 3 颗棋子。 => calculatorWinner
// 当无人获胜时，显示一个平局的消息。