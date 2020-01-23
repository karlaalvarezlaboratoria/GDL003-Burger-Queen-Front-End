import React, { Component } from 'react';
import './SeeCommand.css';
import Dialog from './Dialog';
import Header from './Header';
import { productsLink } from './links';
import httpCall from './httpRequest';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      isOpen: false,
      isOpenDelete: false,
      isOpenEdit: false,
    };
  }

  componentDidMount() {
    let deploy = productsLink,
      tokenLocal = localStorage.getItem('Token'),
      tokenHeader = 'Bearer ' + tokenLocal;
    fetch(deploy, {
      headers: {
        authorization: tokenHeader,
      },
    })
      .then(data => data.json())
      .then(data =>
        this.setState({
          menu: data.products,
        }),
      );
  }

  addProduct = () => {
    let link = productsLink,
      verb = 'POST',
      body = {
        price: this.newPrice.value,
        name: this.newName.value,
      };
    httpCall(link, verb, body);
    this.setState({
      menu: [...this.state.menu, body],
      isOpen: false,
    });
  };

  deleteProduct = _id => {
    let link = productsLink + '/' + _id,
      verb = 'DELETE',
      body = this.state.menu;
    httpCall(link, verb, body);
    let menu = this.state.menu;
    let newMenu = menu.filter(el => {
      return el._id !== _id;
    });
    this.setState({
      menu: newMenu
    });
  };

  render() {
    let menu = this.state.menu;
    return (
      <div>
        <Header route="/user" title="Menu"></Header>
        <button className="buttonClose" onClick={() => this.setState({ isOpen: true })}>
          + Add product
        </button>
        <Dialog isOpen={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
          <form>
            <label>
              <input
                ref={input => {
                  this.newName = input;
                }}
                className="dialog-input"
                type="text"
                placeholder="New product"></input>
            </label>
            <label>
              <input
                ref={input => {
                  this.newPrice = input;
                }}
                className="dialog-input"
                type="text"
                placeholder="Price"></input>
            </label>
          </form>
          <button onClick={this.addProduct}>Add</button>
          <button onClick={() => this.setState({ isOpen: false })}>Cancel</button>
        </Dialog>

        <div className="seeCommand">
          <table id="menuList">
            <tbody>
              <th>Product</th>
              <th>Price</th>
              <th></th>
              {menu.map(element => (
                <tr key={element._id}>
                  <td>{element.name}</td>
                  <td>{element.price}</td>
                  <td>
                    <button id={element._id} onClick={() => this.deleteProduct(element._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Manager;
