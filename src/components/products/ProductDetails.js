import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ShopContext } from '../../context';
const ProductDetails = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { addToCart } = value;

        const {
          id,
          name,
          inCart,
          price,

          about,
          name_bio,
          imgs,
          specs
        } = value.detailProduct[0];
        if (value.detailProduct.length > 0) {
          return (
            <div className='product-detail'>
              <div className='product-detail-img'>
                <img src={imgs[0]} alt='' />
              </div>
              <div className='product-detail-content'>
                <h1 className='product-detail-content-title'>
                  {name} <span>{name_bio}</span>
                </h1>
                <p className='product-detail-content-price'>
                  <strong>${price}.00</strong>
                </p>
                <p className='product-detail-content-info' />
                {about.map((item, index) => (
                  <p key={index}>
                    <small>{item}</small>
                  </p>
                ))}
                <div className='product-detail-content-btn'>
                  {' '}
                  {inCart ? (
                    <p disabled>In cart</p>
                  ) : (
                    <p onClick={() => addToCart(id)}>
                      {' '}
                      <MdAddShoppingCart className='product-detail-content-btn-icon' />{' '}
                      Add To Cart
                    </p>
                  )}
                </div>
              </div>
              <ul className='product-detail-specs'>
                <h3>specifications</h3>
                {specs.map((spec, index) => (
                  <li key={index}>
                    <p>{spec.specs_head}</p>
                    <p>{spec.specs_detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
        return <h1>Hello</h1>;
      }}
    </ShopContext.Consumer>
  );
};

export default ProductDetails;
