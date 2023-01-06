import React from 'react';
import style from './Comments.module.css';

export const Comments = (props) => {

  return (
    <ul className={style.list}>
      <li className={style.item}>
        <h3 className={style.author} size={18} tsize={22}>Maks</h3>
        <p className={style.comment} size={14} tsize={18}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat natus eaque modi!</p>
        {/* <Date date={date} /> */}
      </li>
    </ul>
  )
}

