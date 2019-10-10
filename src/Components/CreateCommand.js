import React, { Component } from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';
import Cancel from './CancelComand';
import Send from './SendCommand';
import uuidv4 from  'uuid/v4';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      order: []
    }
    //SI NO QUIERO USAR ARROW FUNCTION NECESITO AGREGAR...
    //ESTE CÓDIGO PARA QUE EL "this" QUE SE UTILICE EN LA FUNCIÓN
    //SEA EL DE LA CLASE Y NO EL DE LA FUNCIÓN.
    //this.addProduct = this.addProduct.bind(this);
  }
  
  //SE ELIMINA VERBOSE
  componentDidMount() {
    //let keacLocal = 'http://172.17.30.163:3000/api/orders'
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products'
    fetch(deploy)
      .then(data => data.json())
      .then(data => 
        this.setState({
          menu: data.products
        })
      )
      }

  //CUANDO UTILIZO ARROW FUNCTION SE HEREDAN LAS PROPIEDADES
  //DEL PADRE, O SEA DE LA CLASE
  addProduct = (_id, price, value) => {
    let newElement = {
      name: value,
      price: price,
      id: _id,
      uuid: uuidv4()
    }

    console.log(newElement)

    this.setState({
      order: [...this.state.order, newElement]
    })
  }
   

  glory = () => {
    //let keacLocal = 'http://172.17.30.163:3000/api/orders'
    //let bren = 'http://172.17.33.133:3000/api/orders'
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders'
    let databody = this.state.order
    console.log(JSON.stringify({order: databody}))
    fetch(deploy, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }, 
      method: 'POST',
      body: JSON.stringify({order: databody})
        }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  }

  delete = (uuid) => {
      let order = this.state.order
      let keac = uuid;
      let glory = order.filter((el) => {
        console.log(el)
        return el.uuid!== keac 
    })
    console.log(glory)
    
    this.setState({
        order: glory   
      })
    }



  render() {
    console.log(this.state.order)
    const command = this.state;
    console.log(command);
    return (
      <div>
        <Cancel /> <Send glory={this.glory} />
        <h1>Ne-koffee</h1>
        <RenderCommand
          delete={this.delete}
          order={this.state.order} />
        <MenuItems
          menu={this.state.menu}
          addProduct={this.addProduct} />

      </div>
    );
  }
}

export default Create;
