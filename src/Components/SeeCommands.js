import React, { Component } from 'react';
import './SeeCommand.css';
import logo from './Ne-koffee Aqua oscuro.png';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    fetch(deploy, {
      headers: {
        'authorization': tokenHeader
      }
    })
      .then(data => data.json())
      .then(data =>
        this.setState({
          orders: data.orders,
        }),
      );
  }

  print = id => {
    let deployId = 'https://app-nekoffee.herokuapp.com/api/orders/' + id;
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
    console.log(JSON.stringify({ status: 'Print' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': tokenHeader
      },
      method: 'PUT',
      body: JSON.stringify({
        status: 'Print',
        ...this.state.order,
      }),
    })
      .then(() =>
        fetch(deploy, {
          headers: {
            'authorization': tokenHeader
          }
        })
          .then(data => data.json())
          .then(data =>
            this.setState({
              orders: data.orders,
            }),
          ),
      )
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  };

  cancel = id => {
    let deployId = 'https://app-nekoffee.herokuapp.com/api/orders/' + id;
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
    console.log(JSON.stringify({ status: 'Cancel' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': tokenHeader
      },
      method: 'PUT',
      body: JSON.stringify({
        status: 'Cancel',
        ...this.state.order,
      }),
    })
      .then(() =>
        fetch(deploy, {
          headers: {
            'authorization': tokenHeader
          }
        })
          .then(data => data.json())
          .then(data =>
            this.setState({
              orders: data.orders,
            }),
          ),
      )
      .then(data => console.log(data))
      .catch(err => console.log(err.message));
  };

  render() {
    let orders = this.state.orders;
    return (
      <div>
        <header>
          <img src={logo} className='logoSeeCommand' alt='logo' />
          <div className='title'>
            <h1>Orders</h1>
          </div>
          <button className='buttonClose' onClick={() => this.props.history.push('/select')}>
            Exit
        </button>
        </header>
        <div className='seeCommand'>
          <table id='menuList'>
            <tbody>
              <th>Product</th>
              <th>Status</th>
              <th></th>
              {orders.map(element => {
                if (element.status === 'Pending' || element.status === 'Done') {
                  return (
                    <tr key={element._id}>
                      {element.order.map((el, id) => (
                        <li>{el.name}</li>
                      ))}
                      <td>{element.status}</td>
                      <td>
                        <button id={element._id} onClick={() => this.cancel(element._id)}>
                          Cancel
                        </button>
                        <button id={element._id} onClick={() => this.print(element._id)}>
                          Print
                        </button>
                      </td>
                    </tr>
                  );
                }
              }
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Orders;