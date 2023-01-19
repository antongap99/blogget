import style from './Main.module.css';
import Layout from '../Layout';
import Tabs from './Tabs/index';
import List from './List/index';
import { Modal } from '../Modal/Modal'
import { Routes, Route } from 'react-router-dom';
import { Start } from './Start/Start';
import { ErrorPage } from './ErrorPage/ErrorPage'
import { useSelector } from 'react-redux';
import { Notification } from '../Notification/Notification'


// :page -  ключ , который используется для того, чтобы получать путь к определенному контенту
// можно было бы использовать несколько Route, для разного контента в зависимости от url,
// но так как рендерится один и тоже компонент List , то можно использовать эту возможность
export const Main = () => {
  const isLast = useSelector(state => state.postData.isLast)

  return (
    <main className={style.main}>
      <Layout>
        <Tabs />
        <Routes>
          <Route path='/category/:page' element={<List />}>
            <Route path={'post/:id'} element={<Modal />} />
          </Route>
          <Route path='/search' element={<List />}>
            <Route path={'post/:id'} element={<Modal />} />
          </Route>
          <Route path={'/'} element={<Start />} />
          <Route path={'/auth'} element={<Start />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        {/* {status === 'error' && <Notification color={'red'} log={'Ошибка авторизации. Попробуйте авторизоваться еще раз'}/>} */}
        {isLast && <Notification log={'посты закончились'} />}
      </Layout>
    </main>
  );
}
