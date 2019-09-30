import React from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';
import EnterButton from './EnterButton'

function Enter() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input className='Input' type= 'text' >
        </input>
        <EnterButton/>
      </header>
    </div>
  );
}

export default Enter;