import React from 'react';
import { ShopContext } from '../../context';
import CartItem from './CartItem';

const CartList = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { cart } = value;
        return (
          <React.Fragment>
            {cart.map((item, index) => {
              return <CartItem key={index} item={item} />;
            })}
          </React.Fragment>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default CartList;
