import React from "react";
// 1. 导入一个 useNavigate 钩子函数
import { useNavigate } from "react-router-dom";

const Login = () => {
  // 2. 执行 useNavigate 函数得到跳转函数
  const navigate = useNavigate();
  const handleLogin = () => {
    // 1. 执行跳转函数完成路由跳转
    // 2. { replace: true } 不添加‘/login’到历史记录
    // 3. 可以通过路由传参
    navigate("/home?user=x001&status=login", { replace: true });
  };

  return (
    <>
      <h1>我是登录页面！</h1>
      <p>点击登录按钮可以跳转到Home页面</p>
      <button onClick={handleLogin}>登录</button>
    </>
  );
};

export default Login;
