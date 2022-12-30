import React from 'react';
import style from './List.module.css';
import Post from './Post/index';
import PropTypes from 'prop-types';
import { postsContext } from '../../../context/postContext';
import { useContext } from 'react';

export const List = () => {

  const {posts}= useContext(postsContext);
  console.log('posts: ', posts);
 
  const renderData = () => {
    try {
      const data = posts.map((item) => (
        <Post key={item.id} postData={item}/>
      ))
      return data;
    } catch (error) {
      console.log('загрузка');
    }

  }

  const postsData = [
    {
      thumbnail: '',
      title: 'title title titletitle titletitletitletitle',
      author: 'Nickname1',
      ups: 24,
      date: '2022-02-20T09:45:00.000Z',
      id: '123'
    },
    {
      thumbnail: '',
      title: 'title titletitletitleti tletitletitletitle',
      author: 'Nickname2',
      ups: 55,
      date: '2022-01-15T09:45:00.000Z',
      id: '234'
    },
    {
      thumbnail: '',
      title: 'title1 titletitletit letitletitletitletitle',
      author: 'Nickname3',
      ups: 23,
      date: '2022-10-19T09:45:00.000Z',
      id: '345'
    },
    {
      thumbnail: '',
      title: 'title titletit leti tletitleti tletitletitle',
      author: 'Nickname4',
      ups: 24,
      date: '2022-02-24T09:45:00.000Z',
      id: '456'
    },
  ]
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