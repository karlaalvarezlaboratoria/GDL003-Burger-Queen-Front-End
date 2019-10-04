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
  componentDidMount() {
    fetch('https://gdl003-burger-queen-back-end.brendavielmas.now.sh/api/products')
      .then(data => data.json())
      .then(data => {
        let arr = [];
        let keac = () => {
          data.products.forEach((element) => {
            arr.push(element)
          }); console.log(arr)
          return arr;
        }
        keac()

        this.setState({
          // menu: [
          //   { id: 1, name: 'Café', price: 15 },
          //   { id: 2, name: 'Té', price: 10 },
          //   { id: 3, name: 'Chocolate', price: 20 }]
          menu: arr
        })
      })
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
    console.log(this.state.order)
    let databody = this.state.order

    fetch('https://gdl003-burger-queen-back-end.brendavielmas.now.sh/api/orders', {
      method: 'POST',
      body: JSON.stringify(databody)
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
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
          order={this.state.order} />
        <MenuItems
          menu={this.state.menu}
          addProduct={this.addProduct} />

      </div>
    );
  }
}

export default Create;
