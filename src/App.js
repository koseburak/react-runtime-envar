import logo from './logo.svg';
import './App.css';
import { Helmet } from 'react-helmet';


function App() {

  return (
    <div className="App">
      <Helmet>
        <title>{window._env_.DOC_TITLE}</title>
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>API_URL: {window._env_.API_URL}</p>
      </header>
    </div>
  );
}

export default App;
