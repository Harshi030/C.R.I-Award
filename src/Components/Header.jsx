import React from 'react'
import logo from './images/logo.png'
import style from './main.module.css'
const Header = () => {
  return (
    <div>
      <center>
      <img id={style.logo} src={logo} alt="" />
      </center>
    </div>
  )
}

export default Header