import React from 'react'
import { Router, Route, Switch, Redirect, } from 'react-router-dom'
import { createHashHistory as createHistory, } from 'history'

import * as official from '@pages/official'
import * as ticTacToe from '@pages/tic-tac-toe'

const Routers = [
  { path: '/', name: 'App', component: official.AjaxAndApis, },
  { path: '/game', name: 'Game', component: ticTacToe.Game, },
]

const history = createHistory()

const BasicRoute = () => (
  <Router history={history}>
    <Switch>
      {/* <Route component={base.Login} exact path="/login" />
      <Route path="/" render={({ history, location, match, }) => (
        <base.ContainerWrap history={history} location={location} match={location}> */}
      {
        Routers.map((item, index) => (
          <Route exact key={index} path={item.path} render={props =>
            (<item.component {...props} />)
          } />
        ))
      }
      {/* </base.ContainerWrap>
      )} />
      <Redirect to="/notfound" /> */}
    </Switch>
  </Router>
)

export default BasicRoute;