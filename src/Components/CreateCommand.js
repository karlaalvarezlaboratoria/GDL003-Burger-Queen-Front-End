import React, { Component } from 'react';
import './CreateCommand.css';
import RenderCommand from './RenderCommand';
import MenuItems from './MenuItems';
import Cancel from './CancelCommand';
import Send from './SendCommand';
import uuidv4 from 'uuid/v4';
import Header from './Header';
import ordersLink from './links';
import httpCall from './httpRequest';

class Create extends Component {
  constructor() {
    super();
    this.state = {
      menu: [],
      order: []
    }
  }

  componentDidMount() {
    let deploy = ordersLink
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
    let link = "http://localhost:3000/api/orders",
    newOrder= this.state.order,
      verb = 'POST',
      body =  {order:newOrder};
    httpCall(link, verb, body);
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
        <Header route= "/select" title= "New Order"></Header>
        <Send sendCommand={this.sendCommand} /><Cancel />
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