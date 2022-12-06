import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg'

const Logo = props => {

  return(
      <a className = {style.link} href = '/'>
        <img className={style.logo} src={logo} alt="logo" />
      </a>
    ) 
    
}

export default  Logo