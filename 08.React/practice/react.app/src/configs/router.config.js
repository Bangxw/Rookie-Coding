import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from '@pages/hello'
import Game from '@pages/tic-tac-toe'
import DocsComponent from '@pages/docs'
import Comment from '@pages/comment'
import ReduxPage from '@pages/redux'

const routes = [
  { path: '/game', component: Game },
  { path: '/docsComponent', component: DocsComponent },
  { path: '/comment', component: Comment },
  { path: '/redux', component: ReduxPage }
]

const BasicRoute = () => (
  <Router>
    <Route exact path="/" component={Home} />
    {
      routes.map((item, index) => (
        <Route exact key={index} path={item.path} component={item.component} />
      ))
    }
  </Router>
)
export default BasicRoute