import React, { Component } from 'react';
import './Enter.css';
import './CancelComand.css'

class EnterButton extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={() => this.props.sendToken}
      >
        Enter
  </button>
    )
  }
}

export default EnterButton;