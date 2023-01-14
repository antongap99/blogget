import style from './Logo.module.css';
import logo from './img/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Logo = () => {
  const token = useSelector(state => state.token.token);
  
  return (
    (token !== '') ? 
    <Link className={style.link} to='/'>
      <img className={style.logo} src={logo} alt="logo" />
    </Link>
    : 
    <Link className={style.link} to='/category/top'>
      <img className={style.logo} src={logo} alt="logo" />
    </Link>
  );
}



export default Logo;
