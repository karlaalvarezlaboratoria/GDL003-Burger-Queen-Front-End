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

  addNewProduct = (price, value) => {
      /*let newElementToAdd = {
        name: value,
        price: price,
        id: _id
      }*/
    price= this.newPrice.value;
    value = this.newName.value;
    this.setState({
      menu: [...this.state.menu, {price: price, name: value}]
    })
  }

  addProduct=()=>{
    this.addNewProduct();
    let ip= "192.168.100.11"
    let deploy2= 'https://gdl003-burger-queen-back-end.brendavielmas.now.sh/api/products'
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
      method: 'POST',
      body: JSON.stringify({ products: databody })
    }).then(res => res.json())
      .then(data => console.log(data), this.setState({
        isOpen: false,
      }),)
      .catch(err => console.log(err.message));
  }

  deleteProduct=(_id)=>{
    let elementToDelete = {
      id: _id
    }
    let deploy = 'https://app-nekoffee.herokuapp.com/api/products/' + _id;
    console.log(deploy);
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
      method: 'DELETE',
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
