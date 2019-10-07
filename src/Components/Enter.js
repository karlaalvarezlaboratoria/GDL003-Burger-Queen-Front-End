import React from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';
import EnterButton from './EnterButton'

function Enter() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="NekoffeeLogo" alt="logo" />
        <p>User</p>
        <input className='User' type='text' />
        <p>Password</p>
        <input className='Password' type='password' />
        <EnterButton/>
      </header>
    </div>
  );
}

export default Enter;