import React from 'react';

import { ShopContext } from '../../context';

const CartItem = ({ item }) => {
  const {
    id,
    name,
    count,
    price,

    imgs,
    total
  } = item[0];

  return (
    <div className='cart-product'>
      <div className='cart-product-img'>
        <img src={imgs[0]} alt='' />
        <p>
          <small>{name}</small>
        </p>
      </div>
      <div className='cart-product-price'>
        <p>${price}</p>
      </div>
      <div className='cart-product-quantity'>
        <ShopContext.Consumer>
          {value => {
            return (
              <React.Fragment>
                <button onClick={() => value.decrement(id)}>
                  <i className='fas fa-minus' />
                </button>
                <button>{count}</button>
                <button onClick={() => value.increment(id)}>
                  <i className='fas fa-plus' />
                </button>
              </React.Fragment>
            );
          }}
        </ShopContext.Consumer>
      </div>
      <div className='cart-product-remove'>
        <ShopContext.Consumer>
          {value => {
            return (
              <i
                onClick={() => value.removeItem(id)}
                className='fas fa-trash-alt remove-btn'
              />
            );
          }}
        </ShopContext.Consumer>
      </div>
      <div className='cart-product-total'>
        <p>${total}</p>
      </div>
    </div>
  );
};

export default CartItem;
