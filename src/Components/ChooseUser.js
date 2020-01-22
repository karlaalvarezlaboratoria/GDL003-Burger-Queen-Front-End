import React, { Component } from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom';
import Header from './Header';

class User extends Component {
  render() {
    return (
      <div>
        <Header route="/" /*title= "Select your user"*/></Header>
        <h1 className="titleUser">Select your user</h1>
        <button className="buttonUser" onClick={() => this.props.history.push('/management')}>
          Manager
        </button>
        <button className="buttonUser" onClick={() => this.props.history.push('/select')}>
          Waiter
        </button>
        <button className="buttonUser" onClick={() => this.props.history.push('/kitchen')}>
          Coffee Bar
        </button>
      </div>
    );
  }
}

export default withRouter(User);
