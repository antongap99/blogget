import Layout from '../Layout';
import Logo from './Logo/Logo';
import Title from './Title/Title';
import Search from './Search/Search';
import Auth from './Auth/Auth';


import style from './Header.module.css';

// props - параметры , которые получает компонент
export const Header = props => (
  <header className={style.header}>
    <Layout>
      <div className={style.gridContainer}>
        <Logo></Logo>
        <Title>Главная</Title>
        <Search></Search>
        <Auth auth = ''></Auth>
      </div>
    </Layout>
  </header>
);


