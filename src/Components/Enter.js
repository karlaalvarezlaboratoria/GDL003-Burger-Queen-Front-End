import React, { Component } from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';

class Enter extends Component {
  constructor() {
    super();
    this.sendToken = this.sendToken.bind(this);
  }

  sendToken() {
    let user = this.user.value;
    console.log(user)
    let password = this.password.value;
    console.log(password)
    var data = { name: user, password: password };
    var karina= 'http://172.17.32.63:3000/api/authenticate'
   fetch(/*'https://gdl003-burger-queen-back-end.engkarinacabrera.now.sh/api/authenticate'*/ karina, {
      method: 'POST',
      body: data,
    })
      .then(data => {
        console.log(data)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="NekoffeeLogo" alt="logo" />
          <form className='loginForm' method='post'>
            <p>User</p>
            <input className='User' type='text' ref={input => { this.user = input; }} />
            <p>Password</p>
            <input className='Password' type='password' ref={input => { this.password = input; }} />
            <br></br>
            <button
              type="button"
              onClick={this.sendToken}
            >
              Enter
  </button>
          </form>
        </header>
      </div>
    );
  }

}

export default Enter;