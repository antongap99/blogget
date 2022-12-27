/* eslint-disable max-len */
// eslint-disable-next-line react/prop-types

import style from './Auth.module.css';
import { ReactComponent as SaveIcon } from './img/login.svg';
import { auth_url } from '../../../api/auth';
import { Text } from '../../../UI/Text/Text';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useAuth } from '../../../hooks/useAuth';

const Auth = ({delToken}) => {
  const [isAuth, setIsAuth] = useState(false);
  const [auth, setAuth] = useAuth({});


  const avatarHandler = () => {
    if(isAuth) {
      setIsAuth(false);
      return;
    }
    setIsAuth(true);

  }

  const logoutHandle = () => {
    setAuth({});
    setIsAuth(false);
    delToken('');
    window.location.href = 'http://localhost:3000/'
    console.log(window.location)
  }

  return (
    <div className={style.container}>
      {auth.name ?
        (
          <>
          <button className={style.btn} onClick={avatarHandler}>
            <img className={style.img} src={auth.img} title={auth.name} alt={auth.name} />
          </button>
          {isAuth && <button className={style.logout} onClick={logoutHandle}>выйти</button>}
          
            <Text className={style.title} center size={12} tsize={16} dsize={20}>{auth.name}</Text>
          </>
        )
        :
        (
          <Text className={style.authLink} As={'a'} href={auth_url}>
            <SaveIcon className={style.svg} />
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
