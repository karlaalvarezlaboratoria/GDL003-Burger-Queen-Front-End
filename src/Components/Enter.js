import React from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';

function Enter() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className='Input' type= 'text' >
        </input>
        <button className= "Button">
        </button>
      </header>
    </div>
  );
}

export default Enter;