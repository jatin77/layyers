import React, { Component } from 'react';
import { ShopContext } from '../../context';

export class CartTitle extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {value => {
          return (
            <div className='cart-head-title'>
              <div className='cart-head-text'>
                <h1>Your Shopping cart</h1>
                <p>You have {value.cart.length} items in your cart</p>
                <span className='cart-count'>{value.cart.length}</span>
              </div>
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default CartTitle;
