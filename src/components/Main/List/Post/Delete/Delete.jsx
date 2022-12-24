import React from 'react';
import style from './Delete.module.css';
import {ReactComponent as SaveIcon} from './img/delete.svg';

export const Delete = () => {
  return (
    <button className={style.delete}>
      <SaveIcon className={style.svg}/>
    </button>
  )
}

