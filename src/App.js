import Header from './components/Header/index';
import Main from './components/Main/index';
import { store } from './store';
import { Provider } from 'react-redux';
import { AuthContectProvider } from './context/authContext';
import { PostsContectProvider } from './context/postContext';







function App() {

  return (
    <div className="App">
      <Provider store={store}>
          <AuthContectProvider>
            <PostsContectProvider>
                <Header />
                <Main />
            </PostsContectProvider>
          </AuthContectProvider>
      </Provider>
    </div>
  );
}

export default App;
