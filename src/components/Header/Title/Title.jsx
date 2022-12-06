import React from 'react';
import style from './Title.module.css';

const Title = ({children}) => {

  return (
    <h1 className={style.heading}>{children}</h1>
  )
}

export default  Title