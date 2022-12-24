/* eslint-disable max-len */

import style from './Auth.module.css';
import {ReactComponent as SaveIcon} from './img/login.svg';
// eslint-disable-next-line react/prop-types
const Auth = ({auth}) => (
  <button className={style.button}>
    {auth ? auth :
      <SaveIcon className={style.svg}/>
    }
  </button>
);

export default Auth;
