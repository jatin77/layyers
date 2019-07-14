import React from 'react';
import { ShopContext } from '../../context';
import ProductItems from './ProductItems';
const ProductsList = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { productsList } = value;

        return (
          <ul className='product-container '>
            {productsList.map(product => (
              <ProductItems product={product} key={product.id} />
            ))}
          </ul>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default ProductsList;
