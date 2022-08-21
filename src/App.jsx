import logo from './logo.svg';
import './App.css';
import './assets/css/style.css';
import Buttons from './components/atoms/Buttons';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Buttons></Buttons>
      </header>
    </div>
  );
}

export default App;
