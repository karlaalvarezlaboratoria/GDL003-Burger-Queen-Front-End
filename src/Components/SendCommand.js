import React, { Component } from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom'
import './CancelComand.css'

class Send extends Component {
  constructor() {
    super();
    this.state = {}
  }

  glory() {
    this.props.glory()
    this.props.history.push('/')
  }

  render() {
    return (
      <button
        type="button"
        onClick={() => this.glory()}
      >
        Send
  </button>
    )
  }
}

export default withRouter(Send);