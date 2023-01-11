import Header from './components/Header/index';
import Main from './components/Main/index';
import { AuthContectProvider } from './context/authContext';
import { PostsContectProvider } from './context/postContext';
import { getToken } from './api/token';
import { updateToken } from './store/token/tokenAction';
import { useDispatch } from 'react-redux';
import { store } from './store';




const time = () => (dispatch) => {
  dispatch({
    type: 'START',
  })

  setTimeout(() => {
    dispatch({
      type: 'END',
    })
  }, 3000)
}



function App() {
  const dispatch = useDispatch();

  dispatch(updateToken(getToken()));


  store.dispatch(time())
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
