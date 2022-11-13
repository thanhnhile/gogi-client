import React from 'react'
import { useNavigate } from 'react-router-dom'
import className from 'classnames/bind'
import styles from './Login.module.scss'

const cx = className.bind(styles)

function Login() {
  const navigate = useNavigate()
  return (
    <div className={cx('container', 'wrapper')}>
      <h2>Đăng nhập</h2>
      <p>
        Chưa có tài khoản?
        <span onClick={() => navigate('/register')}>Đăng ký</span>
      </p>
      <form className={cx('form')}>
        <input type="text" placeholder="Tên đăng nhập" />
        <input type="password" placeholder="Mật khẩu" />
        <p>Quên mật khẩu?</p>
        <button>Đăng nhập</button>
      </form>
    </div>
  )
}

export default Login
