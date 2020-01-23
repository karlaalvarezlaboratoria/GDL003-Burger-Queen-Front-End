import React, { Component } from 'react';
import './SeeCommand.css';
import Header from './Header';
import { ordersLink } from './links';

class Cancellations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      isOpen: false,
    };
  }

  componentDidMount() {
    let deploy = ordersLink;
    let tokenLocal = localStorage.getItem('Token');
    let tokenHeader = 'Bearer ' + tokenLocal;
    console.log(tokenHeader);
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

  render() {
    let orders = this.state.orders;
    return (
      <div>
        <Header route="/user" title="Cacellations"></Header>
        <div className="kitchen">
          <table id="kitchenList">
            <tbody>
              <th>Product</th>
              <th>Status</th>
              <th>Comments</th>
              {orders.map(element => {
                if (element.status === 'Cancel') {
                  return (
                    <tr key={element._id}>
                      {element.order.map((el, id) => (
                        <li className="Product">{el.name}</li>
                      ))}
                      <td>{element.status}</td>
                      <td>{element.comments}</td>
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

export default Cancellations;
