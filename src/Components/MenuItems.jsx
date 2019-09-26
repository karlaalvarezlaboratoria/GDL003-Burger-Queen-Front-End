import React, { Component } from 'react';
import './MenuItems.css';

class RenderCommand extends Component {
    constructor(){
        super();
        this.state = {
            menu: [
                { name:'Café', price:15 },
                { name:'Té', price:10 }
            ]
        }
    }
    render() {
        return (
            <div className="menuItems">
            <p>Aqui se imprimen los elementos del menu</p>
            <p>{this.state.menu.name}</p>
            </div>
        )
    }
}
export default RenderCommand;