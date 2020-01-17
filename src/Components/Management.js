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
    };
  }

  componentDidMount() {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products';
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal;
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
              <input className="dialog-input" type="text" placeholder="New product"></input>
            </label>
            <label>
              <input className="dialog-input" type="text" placeholder= "Price"></input>
            </label>
          </form>
          <button>Add</button>
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
                    <button id={element._id} onClick={() => this.print(element._id)}>
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
