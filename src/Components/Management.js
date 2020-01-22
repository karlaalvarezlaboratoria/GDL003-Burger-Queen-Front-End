import React, { Component } from 'react';
import './SeeCommand.css';
import Dialog from './Dialog';
import Header from './Header';
import httpCall from './httpRequest';

class Manager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: [],
      isOpen: false,
      isOpenDelete: false,
    };
  }

  componentDidMount() {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products',
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

  // componentWillUpdate() {
  //   let deploy = 'https://app-nekoffee.herokuapp.com/api/products',
  //     tokenLocal = localStorage.getItem('Token'),
  //     tokenHeader = 'Bearer ' + tokenLocal;
  //   fetch(deploy, {
  //     headers: {
  //       authorization: tokenHeader,
  //     },
  //   })
  //     .then(data => data.json())
  //     .then(data =>
  //       this.setState({
  //         menu: data.products,
  //       }),
  //     );
  // }

  addProduct = () => {
    let link = 'https://app-nekoffee.herokuapp.com/api/products',
      verb = 'POST',
      body = {
        price: this.newPrice.value,
        name: this.newName.value,
      };
    httpCall(link, verb, body);
    this.setState({
      isOpen: false,
    });
  };

  deleteProduct = _id => {
    let link = 'https://app-nekoffee.herokuapp.com/api/products/' + _id,
      verb = 'DELETE',
      body = this.state.menu;

    httpCall(link, verb, body, _id);
    this.setState({
      isOpenDelete: false,
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
                    <button id={element._id} onClick={() => this.cancel(element._id)}>
                      Edit
                    </button>
                    <button
                      id={element._id}
                      onClick=/*{() =>
                        this.deleteProduct(element._id)
                      }*/ {() => this.setState({ isOpenDelete: true })}
                    >
                      Delete
                    </button>
                    <Dialog
                    //  key={element._id}
                      isOpen={this.state.isOpenDelete}
                      onClose={() => this.setState({ isOpenDelete: false })}>
                      <div>Are you sure you want to delete this product?</div>
                      <button id={element._id} onClick={this.deleteProduct(element._id)}>
                        Delete
                      </button>
                      <button id={element._id} onClick={() => this.setState({ isOpenDelete: false })}>Cancel</button>
                    </Dialog>
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
