import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {

  render() {
    console.log(this.props.removeFromCart);
    let cartTotal;

    if (this.props.cart.length === 0) {
      cartTotal = 0
    } else {
      cartTotal = this.props.cartTotal;
    }

    let cartItems = this.props.cart.map((item, index) => {

      return <div key={index} className="cart-items" onClick={() => this.props.removeFromCart(item)}>
              <p>{item}</p>
             </div>
    });


    return <div className="Cart">
            <div className="item-container">
              <h4>Cart</h4>
              {cartItems}
            </div>
            <h3>Total: ${cartTotal}</h3>
           </div>
  }
};
