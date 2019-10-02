import React, { Component } from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';
import Cancel from './CancelComand';


class Create extends Component {
  constructor() {
    super();
    this.state = {
      menu: []
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

  render() {
    const command = this.state;
    console.log(command);
    return (
      <div>
        <Cancel />
        <p>Este va a se mi pantalla de comandas</p>
        <RenderCommand /*items={this.state.orderItems}*/ />
        <MenuItems menu={this.state.menu} />

      </div>
    );
  }
}

export default Create;
