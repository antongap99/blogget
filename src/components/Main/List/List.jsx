import React from 'react';
import style from './List.module.css';
import Post from './Post/index';
import PropTypes from 'prop-types';
import { useBestPosts } from '../../../hooks/useBestPosts';

export const List = () => {
  const [posts]= useBestPosts();

  const renderData = () => {
    try {
      const data = posts.map((item) => (
        <Post key={item.id} postData={item}/>
      ))
      return data;
    } catch (error) {
      return (
          <li>
            <h1>Попробуйте авторизоваться</h1>
          </li>
        )
    }

  }


  return (

    <ul className={style.list}>
      {
       renderData()
      }
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
  ])
};