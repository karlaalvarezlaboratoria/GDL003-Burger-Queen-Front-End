import React, { Component } from 'react';
// import './Kitchen.css';
// import './MenuItems.jsx';

class Kitchen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
    };
  }

  componentDidMount() {
    let deploy = 'https://app-nekoffee.herokuapp.com/api/orders';
    fetch(deploy)
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

    console.log(JSON.stringify({ status: 'Done' }));
    fetch(deployId, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify({
        status: 'Done',
        ...this.state.order,
      }),
    })
      .then(() =>
        fetch(deploy)
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
        <button onClick={() => this.props.history.push('/')}>X</button>
        <h1>Esta es mi cocina</h1>

        <div className="renderCommand">
          <h1>Aqui va la tabla de la comanda hecha</h1>
          <table id="menuList">
            <tbody>
              <th>Product</th>
              <th>Status</th>
              <th></th>
              {orders.map(element => {
                if (element.status === 'Pending') {
                  return (
                    <tr key={element._id}>
                      {element.order.map((el, id) => (
                        <tr>
                          <td>{id + 1}</td>
                          <td>{el.name}</td>
                        </tr>
                      ))}
                      <td>{element.status}</td>
                      <td>
                        <button id={element._id} onClick={() => this.done(element._id)}>
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
      </div>
    );
  }
}
export default Kitchen;
