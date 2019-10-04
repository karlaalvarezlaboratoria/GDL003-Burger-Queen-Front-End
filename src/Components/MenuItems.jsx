import React, { Component } from 'react';
import './MenuItems.css';
import './RenderCommand';


class MenuItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [],
            command: []
        }
    }

    addProduct(id, price, value) {
        this.props.addProduct(id, price, value)

    }



    render() {
        return (
            <div className="menuItems">
                <h1>Select Item</h1>
                {this.props.menu.map((command, id) => (
                    <input
                        key={id}
                        type='button'
                        id={command.id}
                        className='button'
                        onClick={() => this.addProduct(command.id, command.price, command.name)}
                        value={command.name}></input>
                ))
                }

            </div>

        )
    }
}
export default MenuItems;