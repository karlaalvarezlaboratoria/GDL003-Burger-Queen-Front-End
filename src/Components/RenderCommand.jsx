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
// delete = (uuid) => {
//   let order = this.props.order
//   let keac = uuid;
//   let glory = order.filter((el) => {
//     console.log(el)
//     return el.uuid!== keac 
// })
// console.log(glory)

// this.setState({
//     order: glory   
//   })
// }


    render() {
        console.log(this.props.order);
        const prueba = this.props.order
        let total = prueba.reduce((obj, data) => { obj += data.price; return obj; }, 0)
        console.log(total);
        return (
            <div className="renderCommand">
                <h1>Note Command</h1>
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
                                    onClick = {()=>this.delete(element.uuid)}>
                                        Delete
                                    </button></td>
                            </tr>
                        )
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>#</td>
                            <td>Total</td>
                            <td>${total}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }

}
export default RenderCommand;