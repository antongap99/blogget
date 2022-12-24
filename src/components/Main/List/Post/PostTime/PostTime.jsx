import React from 'react';
import style from './PostTime.module.css';
import formatDate from '../../../../../utilities/formatDate';

export const PostTime = ({date}) => {
  return <time className={style.date} dateTime={formatDate(date)}>{formatDate(date)}</time>
}

