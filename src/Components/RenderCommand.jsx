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
    
    renderTableHeader() {
        let header = Object.keys(this.props.order[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    render() {
      //  console.log(this.addProduct)
        return (
            <div className="renderCommand">
                <h1>Aqui va la tabla de la comanda hecha</h1>
                <table id='menuList'>
                    <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.props.order.map((element, id)=>(
                          <tr key={id}>
                          <td>{id}</td>    
                          <td>{element.name}</td>
                          <td>{element.price}</td>
                          </tr>  
                        )
                        )}
                    </tbody>
                </table>
            </div>
        )
    }

}
export default RenderCommand;