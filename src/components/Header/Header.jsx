import Layout from '../Layout';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import Search from './Search/Search';
import Auth from './Auth/Auth';
import PropTypes from 'prop-types';
import style from './Header.module.css';


export const Header = () => {


  return (
    <header className={style.header}>
      <Layout>
        <div className={style.gridContainer}>
          <Logo/>
          <Title>Главная</Title>
          <Search></Search>
          <Auth></Auth>
        </div>
      </Layout>
    </header>
  );
}

Header.propTypes = {
  token: PropTypes.string,
}

