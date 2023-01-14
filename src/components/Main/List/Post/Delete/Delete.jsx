import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {postDataSlice} from '../../../../../store/postData/postDataSlice';
import style from './Delete.module.css';
import {ReactComponent as SaveIcon} from './img/delete.svg';

export const Delete = ({id}) => {
  const postData = useSelector(state => state.postData.postData);
  const dispatch = useDispatch()

  const deleteHandle = e => {
    const newPostData = [...postData]
    newPostData.forEach((post, index, array) => {
        if(post.id === id){
          console.log(array.splice(index, 1));
          dispatch(postDataSlice.actions)
        }
    });
  }

  return (
    <button className={style.delete} onClick={deleteHandle}>
      <SaveIcon className={style.svg}/>
    </button>
  )
}

