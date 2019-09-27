import React, { Component } from 'react';
import './MenuItems.css';

/*
class RenderCommand extends Component {
    constructor(props) {
        super(props);
        this.addProduct = this.addProduct.bind(this);
        this.state = {
            menuList: [
                { name: 'Café', price: 15 },
                { name: 'Té', price: 10 },
                { name: 'Milkshake', price: 25 }
            ]
        }
    }

    addProduct() {
        console.log("Hola Glo :D");
        console.log(this.menuId)
        console.log(this.menuId.button);
    }

    render() {
        let { menuList } = this.state
        return (
            <div className="menuItems">
                <p>Aqui se imprimen los elementos del menu</p>
                <ul>
                    {menuList.map(element => (
                            <div key={element.name} id={element.name} ref={button => { this.menuId = button; }}>
                                <p>{element.name}</p>
                                <button value={element.name} onClick={this.addProduct}>{element.name}</button>
                            </div>
                        ))  
                    }
                </ul>

            </div>
        )
    }

} 
*/

export default RenderCommand;