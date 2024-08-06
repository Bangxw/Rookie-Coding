import { useRoutes } from "react-router-dom";

import Login from "./Login";
import Home from "./Home";
import Dashboard from "./Dashboard";
import List from "./List";

const routesList = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/list",
        element: <List />,
      },
    ],
  },
];

function WrapperRoutes() {
  let element = useRoutes(routesList);
  return element;
}

export default WrapperRoutes;
