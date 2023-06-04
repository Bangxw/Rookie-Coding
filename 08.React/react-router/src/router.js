import { useRoutes } from 'react-router-dom'

import Login from './Login'
import Home from './Home'

const routesList = [{
  path: '/', 
  element: <Login/>,
}, {
  path: '/home',
  element: <Home/>,
}]

function WrapperRoutes() {
  let element = useRoutes(routesList)
  return element;
}

export default WrapperRoutes