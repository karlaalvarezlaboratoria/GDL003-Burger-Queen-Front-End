import React, { Component } from 'react';
import './RenderCommand.css';
import './MenuItems.jsx';

class RenderCommand extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [
                // { name: 'Café', price: 15, type: 'drink' },
                // { name: 'Té', price: 10, type: 'drink' }
            ]
        }
    }
    addProduct(id, price, value) {
        console.log(id)
        // return this.state.menuList.map((menu, index) => {
        //     const { name, price, type } = menu
        //     return (
        //         <tr key={name}>
        //             <td>{name}</td>
        //             <td>{price}</td>
        //             <td>{type}</td>
        //         </tr>
        //     )
        // })
    }
    // renderTableHeader() {
    //     let header = Object.keys(this.state.menuList[0])
    //     return header.map((key, index) => {
    //         return <th key={index}>{key.toUpperCase()}</th>
    //     })
    // }

    render() {
        return (
            <div className="renderCommand">
                <h1>Aqui va la tabla de la comanda hecha</h1>
                <table id='menuList'>
                    <tbody>
                          {/* <tr>{this.renderTableHeader()}</tr> */}
                        {this.addProduct()}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default RenderCommand;