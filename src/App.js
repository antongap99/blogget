import Header from './components/Header/index';
import Main from './components/Main/index';
import {useToken} from './hooks/useToken';


function App() {
   const [ , delToken] = useToken('');
 
  return (
    <div className="App">
      <>
        <Header  delToken={delToken}/>
        <Main/>
      </>
    </div>
  );
}

export default App;
