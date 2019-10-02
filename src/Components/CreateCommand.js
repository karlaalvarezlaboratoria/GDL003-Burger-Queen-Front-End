import React, { Component } from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';
import Cancel from './CancelComand';


class Create extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      order:[{
        id: 1,
        name: "producto",
        price: "precio"
      }]
    }
  }
  componentDidMount() {
    // fetch('https://gdl003-burger-queen-back-end.engkarinacabrera.now.sh/products')
    //     .then(data => data.json())
    //     .then(data => {
    //         let arr = [];
    //         let keac = () => {
    //             data.products.forEach((element) => {
    //                 arr.push(element)
    //             }); console.log(arr)
    //             return arr;
    //         }
    //         keac()

    this.setState({
      menu: [
        { id: 1, name: 'Café', price: 15 },
        { id: 2, name: 'Té', price: 10 },
        { id: 3, name: 'Chocolate', price: 20 }]
      //             menu: arr
    })
    //     })
  }

  addProduct(id, price, value) {
    let newElement= []
    newElement.push({
        name: value,
        price:price,
        id: id
     } )

      console.log(newElement)
     
      // this.setState({
      //   order: [{
      //     name:value,
      //     price: price,
      //     id: id,
      //   }]
        
      // })
}



  render() {
    console.log(this.state.order)
    const command = this.state;
    console.log(command);
    return (
      <div>
        <Cancel />
        <p>Este va a se mi pantalla de comandas</p>
        <RenderCommand
        order={this.state.order} /*items={this.state.orderItems}*/ />
        <MenuItems 
        menu={this.state.menu}
        addProduct={this.addProduct} />

      </div>
    );
  }
}

export default Create;
