import React, { Component } from 'react';
import './SeeCommand.css';
import Dialog from './Dialog';
import Header from './Header';

class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isOpen: false,
    };
  }

  componentDidMount() {
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal;
    console.log(tokenHeader);
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    fetch(deploy, {
      headers: {
        authorization: tokenHeader,
      },
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
    let tokenHeader = 'Bearer ' + tokenLocal;
    console.log(tokenHeader);
    console.log(JSON.stringify({ status: 'Print' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: tokenHeader,
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
            authorization: tokenHeader,
          },
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
    let tokenHeader = 'Bearer ' + tokenLocal;
    console.log(tokenHeader);
    console.log(JSON.stringify({ status: 'Cancel' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: tokenHeader,
      },
      method: 'PUT',
      body: JSON.stringify({
        status: 'Cancel',
        comments: this.select.value,
        ...this.state.order,
      }),
    })
      .then(() =>
        fetch(deploy, {
          headers: {
            authorization: tokenHeader,
          },
        })
          .then(data => data.json())
          .then(data =>
            this.setState({
              orders: data.orders,
            }),
          ),
      )
      .then(data =>
        this.setState({
          isOpen: false,
        }),
      )
      .catch(err => console.log(err.message));
  };

  render() {
    let orders = this.state.orders;
    return (
      <div>
        <Header route="/select" title="Orders"></Header>
        <div className="seeCommand">
          <table id="menuList">
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
                        <button id={element._id} onClick={() => this.setState({ isOpen: true })}>
                          Cancel
                        </button>
                        <Dialog
                          isOpen={this.state.isOpen}
                          onClose={() => this.setState({ isOpen: false })}>
                          <form>
                            <div className="select-box">
                              <select
                                ref={select => {
                                  this.select = select;
                                }}
                                className="dialog-select">
                                <option>Se canceló por x</option>
                                <option>Se canceló por y</option>
                                <option>Se canceló por z</option>
                              </select>
                            </div>
                          </form>
                          <button onClick={() => this.cancel(element._id)}>Next</button>
                        </Dialog>
                        <button id={element._id} onClick={() => this.print(element._id)}>
                          Print
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Orders;
