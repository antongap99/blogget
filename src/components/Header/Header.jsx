import Layout from '../Layout';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import Search from './Search/Search';
import Auth from './Auth/Auth';
import PropTypes from 'prop-types';


import style from './Header.module.css';

// props - параметры , которые получает компонент
export const Header = ({delToken}) => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo></Logo>
        <Title>Главная</Title>
        <Search></Search>
        <Auth  delToken={delToken}></Auth>
      </div>
    </Layout>
  </header>
);

Header.propTypes = {
  token: PropTypes.string,
}

