import logo from './logo.svg';
import './App.css';

function App() {
  const textJSX = "Hello, JSX";
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h1>{textJSX}</h1>
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
      </header>
      <body>
        <h1>{textJSX}</h1>
        <h1>Olá Mundo!</h1>
      </body>
    </div>
  );
}

export default App;
