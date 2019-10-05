import React, { Component } from 'react';
import './Enter.css';
import { withRouter } from 'react-router-dom'
import './CancelComand.css'

class Select extends Component {
    constructor() {
        super();
        this.state = {}
    }

//   glory(){
//       this.props.glory()
//       this.props.history.push('/')
//   }
    
  render(){
    return(
  <div>
  <button
    onClick={() => this.props.history.push('/')}>
    X
  </button>
  <button
  onClick={() => this.props.history.push('/kitchen')}>
  Kitchen
</button>
<button
    onClick={() => this.props.history.push('/create')}>
    Commander
  </button>
  </div>
    )}
}

export default withRouter(Select);