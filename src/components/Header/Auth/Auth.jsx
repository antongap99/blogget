/* eslint-disable max-len */
// eslint-disable-next-line react/prop-types

import style from './Auth.module.css';
import { ReactComponent as SaveIcon } from './img/login.svg';
import { auth_url } from '../../../api/auth';
import { Text } from '../../../UI/Text/Text';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToken } from '../../../store/token/tokenAction';
import { useAuth } from '../../../hooks/useAuth';
import { Loader } from '../../../UI/Loader/Loader'
import { Notification } from '../../Notification/Notification';
import { useNavigate } from 'react-router-dom';
import { postDataSlice } from '../../../store/postData/postDataSlice';

const Auth = () => {
  const [showLogout, setShowLogout] = useState(false);
  const [auth, loading, clearAuth] = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const status = useSelector(state => state.auth.status);
  const isLast = useSelector(state => state.postData.isLast);
  console.log('isLast: ', isLast);

  const getOut = () => {
    setShowLogout(!showLogout);
  }

  const logOut = () => {
    clearAuth({});
    setShowLogout(false);
    dispatch(postDataSlice.actions.postClear())
    localStorage.removeItem('posts');
    dispatch(deleteToken())
    navigate('/')
  }

  return (
    <div className={style.container}>
      {loading ? (<Loader color={ "#99bab3"} size={15}/>) : auth.name ?
        (
          <>
            <button className={style.btn} onClick={getOut}>
              <img className={style.img} src={auth.img} title={auth.name} alt={auth.name} />
            </button>
            {showLogout && <button className={style.logout} onClick={logOut}>выйти</button>}

            <Text className={style.title} center size={12} tsize={16} dsize={20}>{auth.name}</Text>
          </>
        )
        :
        (
          <Text className={style.authLink} As={'a'} href={auth_url}>
            <SaveIcon className={style.svg} />
            {status === 'error' && <Notification color={'red'} log={'Ошибка авторизации. Попробуйте авторизоваться еще раз'}/>}
            {/* {isLast && <Notification color={'yellow'} log={'посты закончились'}/>} */}
          </Text>

        )
      }
    </div>
  )
};

Auth.propType = {
  token: PropTypes.string,
}

export default Auth;
