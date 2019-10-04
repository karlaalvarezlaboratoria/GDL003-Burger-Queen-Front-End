    // import React, { Component } from 'react';
    // import './RenderCommand.css';
    // import './MenuItems.jsx';

    // class RenderCommand extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             order: []
    //         }
    //     }
        
    //     render() {
    //         return (
    //             <div className="renderCommand">
    //                 <h1>Aqui va la tabla de la comanda hecha</h1>
    //                 <table id='menuList'>
    //                     <tbody>
    //                         <th>No.</th>
    //                         <th>Product</th>
    //                         <th>Price</th>
    //                         <th></th>
    //                         {this.props.order.map((element, id, uuid) => (
    //                             <tr key={id} >
    //                                 <td>{id + 1}</td>
    //                                 <td>{element.name}</td>
    //                                 <td>{element.price}</td>
    //                                 <td><button 
    //                                 className= "DeleteElement" 
    //                                 uuid= {uuid}
    //                                 onClick = {()=> this.delete(uuid)}
    //                                 >Delete</button></td>
    //                             </tr>
    //                         )
    //                         )}
    //                     </tbody>
    //                     <tfoot>
    //                         <tr>
    //                             <td>#</td>
    //                             <td>Total</td>
    //                             <td></td>
    //                         </tr>
    //                     </tfoot>
    //                 </table>
    //             </div>
    //         )
    //     }

    // }
    // export default RenderCommand;