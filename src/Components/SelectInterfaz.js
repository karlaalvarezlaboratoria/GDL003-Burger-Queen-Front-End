import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SelectInterfaz.css';

class Select extends Component {
  constructor() {
    super();
    this.state = {}
  }

  //   glory(){
  //       this.props.glory()
  //       this.props.history.push('/')
  //   }

  render() {
    return (
      <div className='waiter'>
        <button className='buttonsWaiter' onClick={() => this.props.history.push('/create')}>
          New Command
        </button>
        <button className='buttonsWaiter' onClick={() => this.props.history.push('/orders')}>
          Edit Command
        </button>
        <button className='buttonsWaiter' onClick={() => this.props.history.push('/')}>
          Exit
        </button>
      </div>
    )
  }
}

export default withRouter(Select);