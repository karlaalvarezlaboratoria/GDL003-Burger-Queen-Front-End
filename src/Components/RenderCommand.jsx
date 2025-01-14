import React, { Component } from 'react';
import './RenderCommand.css';
import './MenuItems.jsx';

class RenderCommand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            order: []
        }
    }

    delete(uuid) {
        this.props.delete(uuid)
    }

    render() {
        console.log(this.props.order);
        const total = this.props.order
        let totalMenu = total.reduce((obj, data) => { obj += data.price; return obj; }, 0)
        console.log(total);
        return (
            <div className='renderCommand'>
                <h1 className='titleTable'>Note Command</h1>
                <table id='menuList'>
                    <tbody>
                        <th>No.</th>
                        <th>Product</th>
                        <th>Price</th>
                        {this.props.order.map((element, id, key) => (
                            <tr key={id}>
                                <td>{id + 1}</td>
                                <td>{element.name}</td>
                                <td>{element.price}</td>
                                <td>
                                    <button
                                        onClick={() => this.delete(element.uuid)}>
                                        Delete
                                    </button></td>
                            </tr>
                        )
                        )}
                    </tbody>
                    <tfoot className='footer'>
                        <tr>
                            <td>#</td>
                            <td>Total</td>
                            <td>${totalMenu}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

export default RenderCommand;