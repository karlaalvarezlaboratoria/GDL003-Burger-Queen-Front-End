import React, { Component } from 'react';
import './SeeCommand.css';
import logo from './Ne-koffee Aqua oscuro.png';
import Dialog from './Dialog';

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

  addProduct = () => {
    let ip = 'http://localhost:3000/api/products',
      deploy = 'https://app-nekoffee.herokuapp.com/api/products',
      tokenLocal = localStorage.getItem('Token'),
      tokenHeader = 'Bearer ' + tokenLocal,
      databody = {
        price: this.newPrice.value,
        name: this.newName.value,
      };
    fetch(deploy, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: tokenHeader,
      },
      method: 'POST',
      body: JSON.stringify(databody),
    })
      .then(res => res.json())
      .then(
        data => console.log(data),
        this.setState({
          isOpen: false,
        }),
      )
      .catch(err => console.log(err.message));
  };

  deleteProduct = _id => {
    let elementToDelete = {
      id: _id,
    };
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products/' + _id;
    console.log(deploy);
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal;
    let databody = this.state.menu;
    console.log(JSON.stringify({ products: databody }));
    fetch(deploy, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: tokenHeader,
      },
      method: 'DELETE',
      body: JSON.stringify({ products: databody }),
    })
      .then(res => res.json())
      .then(
        data => console.log(data),
        this.setState({
          isOpenDelete: false,
        }),
      )
      .catch(err => console.log(err.message));
  };

  render() {
    let menu = this.state.menu;
    return (
      <div>
        <header>
          <img src={logo} className="logoSeeCommand" alt="logo" />
          <button className="buttonClose" onClick={() => this.props.history.push('/')}>
            Exit
          </button>
          <div className="title">
            <h1>Management</h1>
          </div>
        </header>
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
                      onClick={() =>
                        this.deleteProduct(element._id)
                      } /* {() =>
                        this.setState({ isOpenDelete: true })
              }*/
                    >
                      Delete
                    </button>
                    {/* <Dialog
                    //deleteProduct={this.deleteProduct}
                      id={element._id}
                      isOpen={this.state.isOpenDelete}
                      onClose={() => this.setState({ isOpenDelete: false })}>
                      <div>Are you sure you want to delete this product?</div>
                      <button id={element._id} onClick={() => this.deleteProduct(element._id)}>
                        Delete
                      </button>
                      <button
                        id={element._id}
                        onClick={() => this.setState({ isOpenDelete: false })}>
                        Cancel
                      </button>
                    </Dialog> */}
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
