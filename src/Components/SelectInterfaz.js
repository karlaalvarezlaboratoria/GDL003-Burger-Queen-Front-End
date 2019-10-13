import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './SelectInterfaz.css';

class Select extends Component {
  constructor() {
    super();
    this.state = {}
  }

  render() {
    return (
      <div className='waiter'>
        <h1 className='titleUser'>Select your action</h1>
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