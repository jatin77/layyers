import React, { Component } from 'react';

export class CartHeader extends Component {
  render() {
    return (
      <div className='cartHeader'>
        <div className='product-img-title'>
          <p>Product</p>
        </div>
        <div className='product-price'>
          <p>Price</p>
        </div>
        <div className='product-quantity'>
          <p>Quantity</p>
        </div>
        <div className='product-remove'>
          <p>Remove</p>
        </div>
        <div className='product-total'>
          <p>Total</p>
        </div>
      </div>
    );
  }
}

export default CartHeader;
