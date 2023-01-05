import Header from './components/Header/index';
import Main from './components/Main/index';
import { TokenContectProvider } from './context/tokenContext';
import { AuthContectProvider } from './context/authContext';
import { PostsContectProvider } from './context/postContext';


function App() {

  return (
    <div className="App">
      <TokenContectProvider>
        <AuthContectProvider>
          <PostsContectProvider>
            <Header />
            <Main />
          </PostsContectProvider>
        </AuthContectProvider>
      </TokenContectProvider>
    </div>
  );
}

export default App;
