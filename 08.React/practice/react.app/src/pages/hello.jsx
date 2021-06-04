import React from 'react'
import { Link } from 'react-router-dom'

import logo from '@images/logo.svg';
import '@styles/hello.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p><code>Hello, React</code></p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
          Learn React
        </a>
      </header>
      <div className="main">
        <ul>
          <li><Link to="/game">井字棋游戏</Link></li>
          <li><Link to="/comment">评论列表</Link></li>
          <li><Link to="/docsComponent">官方文档示例</Link></li>
        </ul>
      </div>
    </div>
  );
}