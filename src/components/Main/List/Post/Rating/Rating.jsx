import React from 'react';
import style from './Rating.module.css';

export const Rating = ({ups}) => {

  return (
    <div className={style.rating}>
      <button className={style.up} aria-label='Повысить рэйтинг'></button>
      <p className={style.ups}>{ups}</p>
      <button className={style.down} aria-label='Понизить рэйтинг'></button>
    </div>
  )
}

