import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from './Ne-koffee Aqua oscuro.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logo} className="logoSeeCommand" alt="logo" />
        <button className="buttonClose" onClick={() => this.props.history.push(this.props.route)}>
          Exit
        </button>
        <div className="title">
          <h1>{this.props.title}</h1>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
