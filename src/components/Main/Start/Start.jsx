import React from 'react';
import { useSelector } from 'react-redux';
import style from './Start.module.css';

export const Start = () => {
  const token = useSelector(state => state.token.token)
  return (
    token
      ?
      <div className={style.container}>
        <h1 className={style.title}>Стартовая страница</h1>
        <p className={style.text}>Добро пожаловать</p>
        <p className={style.choice}>Выберите категорию</p>
      </div>
      :
      <ul className={style.list}>
        <li>
          <h1>Попробуйте авторизоваться</h1>
        </li>
      </ul>
  )
}

