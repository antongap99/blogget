import {useRef, useEffect} from 'react';
import style from './List.module.css';
import Post from './Post/index';
import PropTypes from 'prop-types';
import { Loader } from '../../../UI/Loader/Loader';
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { postDataRequestAsync } from '../../../store/postData/postDataAction';

export const List = () => {
  const posts = useSelector(state => state.postData.postData);
  const token = useSelector(state => state.token.token);
  const endList = useRef(null);
  const dispatch = useDispatch()
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if(entries[0].isIntersecting){
        dispatch(postDataRequestAsync())
      }
    }, {
      rootMargin: '200px',
    })
  
    observer.observe(endList.current)
  }, [endList.current])

  
  return (
    <ul className={style.list}>
      {
        token ?
          (posts ? posts.map((item) => (
            <Post key={item.id} postData={item} />
          ))
            : <div className={style.loadwrap}><Loader color={"#99bab3"} size={50} /></div>)
          :
          (<li>
            <h1>Попробуйте авторизоваться</h1>
          </li>)
      }
      <li ref={endList} className={style.end}/>
    </ul>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
  ])
};