import React from "react";
import { useSearchParams, Link, Outlet } from "react-router-dom";

function Home() {
  let [params] = useSearchParams();
  let user = params.get("user");
  let status = params.get("status");

  return (
    <div>
      <h1>我是Home页面</h1>
      <p>用户<b>{user}</b>当前状态为<b>{status}</b></p>
      <hr />
      <div id="container">
        <div id="menu">
          <Link to="/dashboard">Dashboard</Link><br />
          <Link to="/list">List</Link>
        </div>

        <div id="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Home;
