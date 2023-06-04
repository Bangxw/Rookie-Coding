import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter} from 'react-router-dom'

import WrapperRoutes from './router'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Link to="/">首页</Link>
      <Link to="/">关于</Link>

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="about" element={<About />}></Route>
      </Routes> */}
      <WrapperRoutes />
    </BrowserRouter>
  </React.StrictMode>
);