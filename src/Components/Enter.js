import React, { Component } from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';
import { withRouter } from 'react-router-dom';

class Enter extends Component {
  constructor() {
    super();
    this.getToken = this.getToken.bind(this);
    this.state = {
      token: '',
      defaultToken: 'neko',
    };
  }

  getToken() {
    let user = 'Nekoffee';
    console.log(user);
    let password = this.password.value;
    console.log(password);
    var sendPassword = 'https://app-nekoffee.herokuapp.com/api/authenticate';
    fetch(sendPassword, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ name: user, password: password }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.success === true) {
          this.props.history.push('/user');
        } else {
          this.setState({
            errorPassword: true,
          });
          this.password.value = '';
          return data.message;
        }
        const token = data.token;
        console.log(data.token);
        this.setState({
          token: token,
        });
        return token;
      })
      .then(token => {
        localStorage.setItem('Token', token);
        let tokenLocal = localStorage.getItem('Token');
        return console.log(tokenLocal);
      })
      .catch(error => {
        console.log(error);
      });
    console.log(this.state.token);
  }

  render() {
    return (
      <header className="App-header">
        <img src={logo} className="NekoffeeLogo" alt="logo" />
        <form className="loginForm" method="post">
          <h1 className="titleUser">Password</h1>
          <p
            className={'messagePasswordIncorrect' + (this.state.errorPassword ? '' : ' invisible')}>
            The password is incorrect
          </p>
          <input
            className="Password"
            type="password"
            value={this.state.defaultToken}
            ref={input => {
              this.password = input;
            }}
          />
          <button type="button" onClick={this.getToken}>
            GET TOKEN
          </button>
        </form>
      </header>
    );
  }
}

export default withRouter(Enter);
