import React, { Component } from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom'
import './CancelComand.css'

class Send extends Component {

  handleSubmit(){
      this.props.handleSubmit()
  }
    
  render(){
    return(
  <button
    type="button"
    onClick={/*this.handleSubmit().then(*/() => this.props.history.push('/')}
  >
    Send
  </button>
    )}
}

export default withRouter(Send);