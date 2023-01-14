import React from 'react';
import style from './Post.module.css';
import notPhoto from './img/notphoto.jpg';
import  PropTypes  from 'prop-types';
import Content from './Content/index';
import Rating from './Rating/index';
// import PostTime from './PostTime/index';
import Delete from './Delete/index';

export const Post = ({postData}) => {
  const {
    title,
    author,
    thumbnail,
    ups,
    selftext: markdown,
    id,
  } = postData;


  return(
    <li className = {style.post}>
      <img className={style.img} src={thumbnail === 'default' || thumbnail === "self"  ? notPhoto : thumbnail} alt={title} />
      <Content author={author} title={title} markdown={markdown} id={id}/>
      <Rating ups={ups} />
      {/* <PostTime date={date}/> */}
      <Delete id={id}/>
    </li>
  )
};

Post.propTypes = {
  postData: PropTypes.object, 
};

