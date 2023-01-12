import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs/index';
import List from './List/index';
import { Modal } from '../Modal/Modal'
import { Routes, Route } from 'react-router-dom';
import { Start } from './Start/Start';
import { ErrorPage } from './ErrorPage/ErrorPage'

// :page -  ключ , который используется для того, чтобы получать путь к определенному контенту
// можно было бы использовать несколько Route, для разного контента в зависимости от url, 
// но так как рендерится один и тоже компонент List , то можно использовать эту возможность
export const Main = () => (
  <main className={style.main}>
    <Layout>
      <Tabs />
      <Routes>
        <Route path='/category/:page' element={<List />}>
          <Route path={'post/:id'} element={<Modal />} />
        </Route>
        <Route path={'/'} element={<Start />} />
        <Route path='*' element={<ErrorPage />}/>
      </Routes>
    </Layout>
  </main>
);

