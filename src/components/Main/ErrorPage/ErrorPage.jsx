import React from 'react';
import { Text } from '../../../UI/Text/Text';
import style from './ErrorPage.module.css';

export const ErrorPage = (props) => {
  return (
    <div className = {style.container}>
      <Text tsize={30} size={20} center bold>404</Text>
      <Text tsize={30} size={20} center  bold>Страница не найдена</Text>
      </div>
  )
}

