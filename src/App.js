import Header from './components/Header/index';
import Main from './components/Main/index';
import { getToken } from './api/token';
import { updateToken } from './store/token/tokenAction';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();
  dispatch(updateToken(getToken()));
  return (
    <Routes>
      <Route
        path='*'
        element={
          <>
            <Header />
            <Main />
          </>
        }
      />

    </Routes>
  );
}

export default App;
