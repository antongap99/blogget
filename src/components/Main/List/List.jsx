/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useEffect } from 'react';
import style from './List.module.css';
import Post from './Post/index';
import PropTypes from 'prop-types';
import { Loader } from '../../../UI/Loader/Loader';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { postDataRequestAsync } from '../../../store/postData/postDataAction';
import { clearCountRequest } from '../../../store/countRequst/countRequestAction';
import { Outlet, useParams } from 'react-router-dom';

export const List = () => {
  const posts = useSelector(state => state.postData.postData);
  const token = useSelector(state => state.token.token);
  const countRequest = useSelector(state => state.countRequest.countRequest)
  const endList = useRef(null);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
    dispatch(postDataRequestAsync(page));
  }, [page])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postDataRequestAsync(page));
      }
    }, {
      rootMargin: '400px',
    })
    observer.observe(endList.current);


    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    }
  }, [endList.current, page])


  return (
    <>
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
        <li ref={endList} className={style.end} />
      </ul>
      {(countRequest === 2 || !token) && <button className={style.button} onClick={() => {
        dispatch(clearCountRequest());
        dispatch(postDataRequestAsync(page));
      }}>Загрузить еще</button>}
      <Outlet />
    </>
  )
}

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
  ])
};