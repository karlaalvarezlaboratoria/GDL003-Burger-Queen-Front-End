import React from 'react'
import { withRouter } from 'react-router-dom'
import './CancelComand.css'

const Cancel = ({ history }) => (
  <button
    type="button"
    onClick={() => history.push('/select')}
  >
    X
  </button>
);

export default withRouter(Cancel);