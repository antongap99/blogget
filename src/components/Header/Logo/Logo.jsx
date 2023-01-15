import style from './Logo.module.css';
import logo from './img/logo.svg';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {postDataSlice} from '../../../store/postData/postDataSlice';

const Logo = () => {
  const token = useSelector(state => state.token.token);
  const dispatch = useDispatch()

  return (
    (token !== '') ?
    <Link className={style.link} to='/'>
      <img className={style.logo} src={logo} alt="logo" onClick={() => {
        dispatch(postDataSlice.actions.postClear());
      }}/>
    </Link>
    :
    <Link className={style.link} to='/category/top'>
      <img className={style.logo} src={logo} alt="logo" />
    </Link>
  );
}



export default Logo;
