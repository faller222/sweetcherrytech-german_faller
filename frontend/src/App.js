import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hola Amorcito!
        </p>
        <a
          className="App-link"
          href="https://www.faller.com.uy"
          target="_blank"
          rel="noopener noreferrer"
        >
          German Faller
        </a>
      </header>
    </div>
  );
}

export default App;
