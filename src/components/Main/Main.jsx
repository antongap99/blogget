import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs/index';
import List from './List/index';
import { PostsContectProvider } from '../../context/postContext';


export const Main = () => (
  <main className={style.main}>
    <Layout>
      <PostsContectProvider>
        <Tabs />
        <List />
      </PostsContectProvider>
    </Layout>
  </main>
);

