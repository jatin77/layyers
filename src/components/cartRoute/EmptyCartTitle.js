import React from 'react';

import { Link } from 'react-router-dom';
function EmptyCartTitle() {
  return (
    <div className='empty-cart-title '>
      <div className='empty-content'>
        <p>Your Shopping cart is empty</p>
        <h1>Go Shop now..!!</h1>

        <Link className='go-home-btn' to='/'>
          <button>Go Home</button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyCartTitle;
