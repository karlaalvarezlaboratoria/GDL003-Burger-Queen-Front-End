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
      newProduct: {name:"", price:""},
      // newMenu: {}
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


//   saveNewProduct=()=>{
//     this.setState({
//       newProduct:{name: this.newName.value, price: this.newPrice.value}
//   })
// }

  addNewProduct = (price, name, _id) => {
    let newPrice= this.newPrice.value;
    let newName = this.newName.value;
    this.setState({
      menu: [...this.state.menu, {price: newPrice, name:newName}]
    })
  }
  
  addProduct=()=>{
    this.addNewProduct();
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products'
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    let databody = this.state.menu;
    console.log(JSON.stringify({ products: databody }))
    fetch(deploy, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': tokenHeader
      },
      method: 'PUSH',
      body: JSON.stringify({ products: databody })
    }).then(res => res.json())
      .then(data => console.log(data), this.setState({
        isOpen: false,
      }),)
      .catch(err => console.log(err.message));
  }

  render() {
    // console.log(this.state.newProduct);
    // console.log(name);
    let menu = this.state.menu;
    console.log(...menu);
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
              <input ref={input => { this.newName = input; }} className="dialog-input" type="text" placeholder="New product" ></input>
            </label>
            <label>
              <input ref={input => { this.newPrice = input; }} className="dialog-input" type="text" placeholder= "Price" ></input>
            </label>
          </form>
          <button onClick={()=> this.addProduct()}>Add</button>
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
