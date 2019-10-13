import React, { Component } from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';
import Cancel from './CancelCommand';
import Send from './SendCommand';
import uuidv4 from 'uuid/v4';
import logo from './Ne-koffee Aqua oscuro.png';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      order: []
    }
  }

  componentDidMount() {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products'
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    fetch(deploy, {
      headers: {
        'authorization': tokenHeader
      }
    })
      .then(data => data.json())
      .then(data =>
        this.setState({
          menu: data.products
        })
      )
  }

  addProduct = (_id, price, value) => {
    let newElement = {
      name: value,
      price: price,
      id: _id,
      uuid: uuidv4()
    }
    this.setState({
      order: [...this.state.order, newElement]
    })
  }


  sendCommand = () => {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders'
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    let databody = this.state.order
    console.log(JSON.stringify({ order: databody }))
    fetch(deploy, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': tokenHeader
      },
      method: 'POST',
      body: JSON.stringify({ order: databody })
    }).then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  }

  delete = (uuid) => {
    let order = this.state.order
    let keac = uuid;
    let sendCommand = order.filter((el) => {
      console.log(el)
      return el.uuid !== keac
    })
    console.log(sendCommand)

    this.setState({
      order: sendCommand
    })
  }

  render() {
    const command = this.state;
    console.log(command);
    return (
      <React.Fragment>
        <header>
          <img src={logo} className='logoKitchen' alt='logo' />
          <div className='title'>
            <h1>New Order</h1>
          </div>
          <Send sendCommand={this.sendCommand} /> <Cancel />
        </header>
        <RenderCommand
          delete={this.delete}
          order={this.state.order} />
        <MenuItems
          menu={this.state.menu}
          addProduct={this.addProduct} />
      </React.Fragment>
    );
  }
}

export default Create;