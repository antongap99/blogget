import Header from './components/Header/index';
import Main from './components/Main/index';
import { TokenContectProvider } from './context/tokenContext';
import { AuthContectProvider } from './context/authContext';


function App() {

  return (
    <div className="App">
      <TokenContectProvider>
        <AuthContectProvider>
          <Header />
          <Main />
        </AuthContectProvider>
      </TokenContectProvider>
    </div>
  );
}

export default App;
