import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        role: squares[a],
        roleIndex: [a, b, c]
      };
    }
  }
  return null;
}

function calculateAxis(index) {
  // 0 1 2
  // 3 4 5
  // 6 7 8

  // (1,1) (2,1) (3,1)
  // (1,2) (2,2) (3,2)
  // (1,3) (2,3) (3,3)

  var colNumber = index % 3 + 1
  var rowNumber = Math.ceil((index + 1) / 3)
  return `(${colNumber},${rowNumber})`
}

// 渲染单独的button
function Square(props) {
  return (
    <button
      className={ "square" }
      onClick={props.onClick}
    >{props.value}</button>
  )
}

// 渲染9个方块
class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        key={i}
        highLight={this.props.roleLine}
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    )
  }

  render() {
    return (
      <> {
        [0, 1, 2].map((y) => (
          <div className="board-row" key={y}>
            {
              [0, 1, 2].map((x) => (
                this.renderSquare(x + y * 3)
              ))
            }
          </div>
        ))
      } </>
    )
  }
}

// 棋盘
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      history: [{
        squares: Array(9).fill(null),
        axis: '(-1,-1)'
      }],
      stepNumber: 0,
      xIsNext: true,
      historySort: 'DESC',
    }
  }

  handleClick(i) {
    const { xIsNext, stepNumber, history } = this.state
    const historyClone = history.slice(0, stepNumber + 1)
    const current = historyClone[historyClone.length - 1]
    const squares = current.squares.slice()

    var winner = calculateWinner(squares)
    if (winner && winner.role || squares[i]) {
      return
    }

    squares[i] = xIsNext ? 'X' : 'O'

    this.setState({
      history: history.concat([{
        squares,
        axis: calculateAxis(i),
      }]),
      stepNumber: history.length,
      xIsNext: !xIsNext
    })
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2) === 0,
    })
  }

  render() {
    const { history, historySort, stepNumber, xIsNext } = this.state

    const current = history[stepNumber]
    const winner = calculateWinner(current.squares)

    const moves = history.map((step, move) => {
      const desc = move ? `Go to move #${move}, axis: ${step.axis}` : 'Go to game start'
      return (
        <li key={move}>
          <button
            className={move === stepNumber ? 'font-bold' : ''}
            onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      )
    })

    let status = 'Next player: ' + (xIsNext ? 'X' : 'O');
    if (winner && winner.role) status = 'Winner: ' + winner.role;

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            roleLine={winner && winner.roleLine}
            onClick={(i) => this.handleClick(i)} />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <button onClick={() => this.setState({ historySort: historySort === 'DESC' ? 'ASC' : 'DESC' })}>Asc/Desc</button>
          <ol>{historySort === 'DESC' ? moves : moves.reverse()}</ol>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Game />)

// ✅ tic-tac-toe(三连棋)游戏的所有功能
// ✅ 能够判定玩家何时获胜
// ✅ 能够记录游戏进程
// ✅ 允许玩家查看游戏的历史记录，也可以查看任意一个历史版本的游戏棋盘状态

// 1. 在游戏历史记录列表显示每一步棋的坐标，格式为 (列号, 行号)。 ==> calculaterAxis, 通过计算square number得出
// 2. 在历史记录列表中加粗显示当前选择的项目。  ==> 渲染历史记录的时候，判断stepNumber和array index是不是相等
// 3. 使用两个循环来渲染出棋盘的格子，而不是在代码里写死（hardcode）。 ==> 两个map嵌套，不能使用for
// 4. 添加一个可以升序或降序显示历史记录的按钮。  ==> 利用 Array.reverse()
// 5. 每当有人获胜时，高亮显示连成一线的 3 颗棋子。
// 6. 当无人获胜时，显示一个平局的消息。