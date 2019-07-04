import React from 'react';
import ReactDOM from 'react-dom';
import './index/index.css';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';

// import App from './index/App';
// import ClickCounter from './chapter.01/ClickCounter'
// import ControlPanel from './chapter.02/ControlPanel'
// import MyButtonController from './run.flux/components/MyButtonController'
// import ControllerPanel from './chapter.03/flux/views/ControllerPanel'
// import ControllerPanel from './chapter.03/redux.basic/views/ControllerPanel'
// import ControllerPanel from './chapter.03/redux.smart.dumb/views/ControllerPanel'
// import Comp from './chapter.03/redux.context'
// import Comp from './chapter.03/react-redux'
// import TodoComp from './chapter.04/todo'
import TodoComp from './chapter.04/todo.devtools'

ReactDOM.render(
  <TodoComp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
