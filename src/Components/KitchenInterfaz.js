     import React, { Component } from 'react';
    // import './Kitchen.css';
    // import './MenuItems.jsx';

    class Kitchen extends Component {
        constructor(props) {
            super(props);
            this.state = {
                orders: []
            }
        }

        componentDidMount() {
            fetch('https://gdl003-burger-queen-back-end.brendavielmas.now.sh/api/orders')
              .then(data => data.json())
              .then(data => 
                this.setState({
                   orders: data.orders
                 })
                )
            }
        
        render() {
            let orders= this.state.orders
            return (
            <div>
                <button
                onClick={()=>this.props.history.push('/select')}>X</button>
                <h1>Esta es mi cocina</h1>
            
                 <div className="renderCommand">
                     <h1>Aqui va la tabla de la comanda hecha</h1>
                     <table id='menuList'>
                         <tbody>
                             <th>No.</th>
                             <th>Product</th>
                             <th>Status</th>
                             <th></th>
                             {orders.map((element) => 
                               element.order.map((el, id) => 
                               <tr key={element._id}>
                               <td>{id+1}</td>
                               <td>{el.name}</td>
                               <td></td>
                               <td><button>DONE</button></td>
                                
                                    

                               </tr>
                               )
                               // element.order.map((el, id) => console.log(id))
                                //  <tr key={id} >
                                //      <td>{id + 1}</td>
                                //      <td>{element.name}</td>
                                //      <td>{element.price}</td>
                                //      <td><button 
                                //     className= "DeleteElement" 
                                //     //uuid= {uuid}
                                //    // onClick = {()=> this.delete(uuid)}
                                //     >Delete</button></td>
                                // </tr>
                            
                            )}
                         </tbody>
                         <tfoot>
                             <tr>
                                 <td>#</td>
                                 <td>Total</td>
                                 <td></td>
                             </tr>
                         </tfoot>
                     </table>
                 </div>
                 </div>
            )
        }

    }
    export default Kitchen;