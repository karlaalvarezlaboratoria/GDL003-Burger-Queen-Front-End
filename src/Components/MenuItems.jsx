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
                <h3>Select Item</h3>
                {this.props.menu.map((command, _id) => (
                    <input
                        key={_id}
                        type='button'
                        id={command._id}
                        className='buttonMenu'
                        onClick={() => this.addProduct(command._id, command.price, command.name)}
                        value={command.name}></input>
                ))
                }

            </div>

        )
    }
}
export default MenuItems;