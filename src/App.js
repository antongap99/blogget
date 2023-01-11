import Header from './components/Header/index';
import Main from './components/Main/index';
import { AuthContectProvider } from './context/authContext';
import { PostsContectProvider } from './context/postContext';
import { getToken } from './api/token';
import { updateToken } from './store/tokenReducer';
import { useDispatch } from 'react-redux';







function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));
  return (
    <div className="App">
          <AuthContectProvider>
            <PostsContectProvider>
                <Header />
                <Main />
            </PostsContectProvider>
          </AuthContectProvider>
    </div>
  );
}

export default App;
