import React, { Component } from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';
import { withRouter } from 'react-router-dom';
import User from './ChooseUser';

class Enter extends Component {
  constructor() {
    super();
    this.getToken = this.getToken.bind(this);
    this.state = {
      token: '',
      access: false
    }
  }

  getToken() {
    let user = 'Nekoffee';
    console.log(user)
    let password = this.password.value;
    console.log(password)
    var sendPassword = 'https://app-nekoffee.herokuapp.com/api/authenticate'
    fetch(sendPassword, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name: user, password: password })
    })
      .then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
        if (data.success === true) {
          this.setState({
            access: true
          })
        } else {
          alert(data.message);
          this.password.value = '';
        }
        const token = data.token;
        console.log(data.token)
        this.setState({
          token: token
        })
        return token
      }).then(token => {
        localStorage.setItem('Token', token);
        let tokenLocal = localStorage.getItem('Token');
        return console.log(tokenLocal);
      }).catch(error => {
        console.log(error)
      })
    console.log(this.state.token)
  }

  render() {
    return (
      this.state.access
        ? (
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='NekoffeeLogo' alt='logo' />
              <User />
            </header>
          </div>
        )
        : (
          <div className='App'>
            <header className='App-header'>
              <img src={logo} className='NekoffeeLogo' alt='logo' />
              <form className='loginForm' method='post'>
                <h1 className='titleUser'>Password</h1>
                <input className='Password' type='password' ref={input => { this.password = input; }} />
                <button type='button' onClick={this.getToken}>
                  GET TOKEN
                </button>
              </form>
            </header>
          </div>
        )
    );
  }
}

export default withRouter(Enter);