import React from 'react';
import style from './Start.module.css';

export const Start = () => {
  return (
    <div className = {style.container}>
      <h1 className = {style.title}>Стартовая страница</h1>
      <p className={style.text}>Добро пожаловать</p>
      <p className={style.choice}>Выберите категорию</p>
    </div>
  )
}

