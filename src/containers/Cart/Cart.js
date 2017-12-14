import React, { Component } from 'react';
import './Cart.css';

export default class Cart extends Component {

  render() {

    let cartItems = this.props.cart.map((item, index) => {

      return <div key={index} className="cart-items">
              <p>{item}, </p>
             </div>
    });


    return <div className="Cart">
            <div className="item-container">
              <h4>Cart</h4>
              {cartItems}
            </div>
            <h3>Total: ${this.props.cartTotal}</h3>
           </div>
  }
};
