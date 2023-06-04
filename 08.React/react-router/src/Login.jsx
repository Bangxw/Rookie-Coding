import React from 'react'
// 1. 导入一个 useNavigate 钩子函数
import { useNavigate } from 'react-router-dom'

const Login = () => {
  // 2. 执行 useNavigate 函数得到跳转函数
  const navigate = useNavigate()
  return (
    <>
      <h1>我是登录页面！点击登录</h1>
      <p>点击登录按钮跳转到Home页面</p>
      {/* 执行跳转函数完成路由跳转 */}
      <button onClick={() => navigate('/home')}>登录</button>
    </>
  )
}

export default Login;