import React, { Component } from 'react';
import './DialogStyles.css';

class Dialog extends Component {
  render() {
    let dialog = (
      <div className="dialog-container">
      <button 
      className= "close-button"
      onClick= {this.props.onClose}  >X</button>
      <div>{this.props.children}</div>
    </div>
    )

    if(!this.props.isOpen){
      dialog=null;
    }

    return (
      <div>{dialog}</div> 
    );
  }
}

export default Dialog;
