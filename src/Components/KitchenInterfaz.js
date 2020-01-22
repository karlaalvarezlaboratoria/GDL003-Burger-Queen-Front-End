import React, { Component } from 'react';
import './KitchenInterfaz.css';
import Header from './Header';

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
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

  done = id => {
    let deployId = 'https://app-nekoffee.herokuapp.com/api/orders/' + id;
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal
    console.log(tokenHeader)
    console.log(JSON.stringify({ status: 'Done' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'authorization': tokenHeader
      },
      method: 'PUT',
      body: JSON.stringify({
        status: 'Done',
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
      <React.Fragment>
        <Header route= "/" title= "Kitchen"></Header>
        <div className='kitchen'>
          <table id='kitchenList'>
            <tbody>
              <th>Product</th>
              <th>Status</th>
              <th></th>
              {orders.map(element => {
                if (element.status === 'Pending') {
                  return (
                    <tr key={element._id}>
                      {element.order.map((el, id) => (
                        <li className='Product'>{el.name}</li>
                      ))}
                      <td>{element.status}</td>
                      <td>
                        <button className='buttonKitchen' id={element._id} onClick={() => this.done(element._id)}>
                          Done
                        </button>
                      </td>
                    </tr>
                  );
                }
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}

export default Kitchen;