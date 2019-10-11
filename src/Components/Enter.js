import React, { Component } from 'react';
import logo from './Ne-koffee Aqua oscuro.png';
import './Enter.css';
import { withRouter } from 'react-router-dom';

class Enter extends Component {
  constructor() {
    super();
    this.tokenWaiter = this.tokenWaiter.bind(this);
    this.tokenKitchen = this.tokenKitchen.bind(this);
    this.state = {
      token: ""
    }
  }

  tokenWaiter() {
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
    this.props.history.push('/select')
  }

  tokenKitchen() {
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
        const token = data.token;
        this.setState({
          token: token
        })
        return token
      }).then(token => {
        localStorage.setItem('Token', token);
        let tokenLocal = localStorage.getItem('Token');
        return console.log(tokenLocal);
      }).catch(error => {
        return console.log(error)
      })
    this.props.history.push('/kitchen')
  }

  render() {
    console.log(this.state.token)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="NekoffeeLogo" alt="logo" />
          <form className='loginForm' method='post'>
            <p>Password</p>
            <input className='Password' type='password' ref={input => { this.password = input; }} />
            <br></br>
            <button type="button" onClick={this.tokenWaiter}>
              Waiter
            </button>
            <button type="button" onClick={this.tokenKitchen}>
              Kitchen
            </button>
          </form>
        </header>
      </div>
    );
  }

}

export default withRouter(Enter);