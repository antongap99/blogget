import React from 'react';
import style from './List.module.css';
import Post from './Post/index';
import PropTypes from 'prop-types';
import { postsContext } from '../../../context/postContext';
import { useContext } from 'react';

export const List = () => {
  const {posts}= useContext(postsContext);
 
  const renderData = () => {
    try {
      const data = posts.map((item) => (
        <Post key={item.id} postData={item}/>
      ))
      return data;
    } catch (error) {
      console.log('загрузка');
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