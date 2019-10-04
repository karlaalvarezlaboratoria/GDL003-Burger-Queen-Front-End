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

    addProduct(_id, price, value) {
        this.props.addProduct(_id, price, value)

    }



    render() {
        return (
            <div className="menuItems">
                <h1>Select Item</h1>
                {this.props.menu.map((command, _id) => (
                    <input
                        key={_id}
                        type='button'
                        id={command._id}
                        className='button'
                        onClick={() => this.addProduct(command._id, command.price, command.name)}
                        value={command.name}></input>
                ))
                }

            </div>

        )
    }
}
export default MenuItems;