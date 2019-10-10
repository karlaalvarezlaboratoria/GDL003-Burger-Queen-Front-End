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

done= (id)=>{
    //console.log(id)
    let keacLocal = 'http://172.17.30.163:3000/api/orders/'+id
    //let orderId = 'http://172.17.33.133:3000/api/orders'
    let ordersDeploy = 'https://gdl003-burger-queen-back-end.brendavielmas.now.sh/api/orders'
     //let databody = this.state.order
     console.log(JSON.stringify({status: "Done"}))
     fetch(keacLocal, {
       headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',
       }, 
       method: 'POST',
       body: JSON.stringify({status: "Done"})
    })
      .then(()=> 
      fetch(ordersDeploy)
      .then(data => data.json())
      .then(data => 
        this.setState({
          orders: data.orders
        }) ) 
         
 ) 

       .then(data => console.log(data))
       .catch(err => console.log(err.message));
   }

render() {
  let orders= this.state.orders
  return (
    <div>
      <button
        onClick={()=>this.props.history.push('/select')}>X
      </button>
      <h1>Esta es mi cocina</h1>

      <div className="renderCommand">
        <h1>Aqui va la tabla de la comanda hecha</h1>
        <table id='menuList'>
          <tbody>
            <th>Product</th>
            <th>Status</th>
            <th></th>
            {orders.map((element) =>
              <tr key={element._id}>
                {element.order.map((el, id) => 
                <tr>
                <td>{id+1}</td>
                <td>{el.name}</td>
                </tr>                        
            )}
                <td>{element.status}</td>
                <td><button id = {element._id} onClick = {()=> this.done(element._id)}>Done</button></td>  
              </tr>                           
            )}
          </tbody>
        </table>
      </div>
    </div>
    )
}

}
export default Kitchen;