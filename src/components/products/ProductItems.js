import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { ShopContext } from '../../context';
const ProductItems = ({ product }) => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { imgs, name, price, inCart, name_bio, id } = product;
        const { addToCart, getDetails } = value;
        return (
          <li className='product'>
            <div className='product-img'>
              <Link onClick={() => getDetails(id)} to={`/product/detail/${id}`}>
                <img src={imgs[1]} alt='' />
              </Link>
            </div>
            <div className='product-name'>
              <p>{name}</p>
              <p>{name_bio}</p>
            </div>
            <div className='product-acc'>
              <div className='product-acc-inCart'>
                {' '}
                {inCart ? (
                  <p disabled>In cart</p>
                ) : (
                  <MdAddShoppingCart
                    onClick={() => addToCart(id)}
                    className='product-acc-inCart-icon'
                  />
                )}
              </div>
              <div className='product-acc-price'>
                <p>$ {price}.00</p>
              </div>
            </div>
          </li>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default ProductItems;
