import React from 'react';
import logo from '../assets_src/images/logo.svg';
import './App.css';
import Coba from './layout/coba';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React with Pujasera
        </a>
        <br/>
        <Coba />
      </header>
    </div>
  );
}

export default App;
