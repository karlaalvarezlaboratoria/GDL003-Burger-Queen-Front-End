import React from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';

import Cancel from './CancelComand';


function Create() {
  return (
    <div> 
    <Cancel/>
    <p>Este va a se mi pantalla de comandas</p>
    <RenderCommand /*items={this.state.orderItems}*//>
    <MenuItems /*addItem={this.addItemHandler}*//>
    </div>
   );
}

export default Create;
