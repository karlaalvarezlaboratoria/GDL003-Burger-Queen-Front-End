import React, { Component } from 'react';
import './SeeCommand.css';
import Header from './Header';

class Cancellations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cancellations: [],
      isOpen: false,
      isOpenDelete: false,
    };
  }

  render() {
    return (
      <div>
        <Header route="/user" title="Cacellations"></Header>
        <div className="seeCommand">
          {/* <table id="menuList">
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
                    <button id={element._id} onClick={() => this.setState({ isOpenDelete: true })}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table> */}
        </div>
      </div>
    );
  }
}

export default Cancellations;
