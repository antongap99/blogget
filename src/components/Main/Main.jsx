import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs/index';
import List from './List/index';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      
        <Tabs />
        <List />

    </Layout>
  </main>
);

