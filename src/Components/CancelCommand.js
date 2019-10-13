import React from 'react'
import { withRouter } from 'react-router-dom'
import './CancelCommand.css'

const Cancel = ({ history }) => (
  <button
    type='button'
    className='buttonCancel'
    onClick={() => history.push('/select')}
  >
    Exit
  </button>
);

export default withRouter(Cancel);