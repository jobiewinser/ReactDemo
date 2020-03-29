import React from 'react';
import logo from '../resources/logo.svg';
import './App.css';

function App() {




  let myNewP = document.createElement("h1");
  myNewP.innerHTML = "This is a paragraph.";


  return (

      <div className="App">
        {myNewP.innerText}

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
      </header>
    </div>
  );
}

export default App;
