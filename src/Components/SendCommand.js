import React, { Component } from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom'
import './CancelCommand.css'

class Send extends Component {
  constructor() {
    super();
    this.state = {}
  }

  sendCommand() {
    this.props.sendCommand()
    this.props.history.push('/select')
  }

  render() {
    return (
      <button
        type='button'
        onClick={() => this.sendCommand()}
      >
        Send
  </button>
    )
  }
}

export default withRouter(Send);