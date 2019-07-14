import React from 'react';
import ProductsList from '../components/products/ProductsList';
import Nav from '../components/nav/Nav';
import { Link } from 'react-router-dom';

import { ShopContext } from '../context.js';
import FooterTabs from '../components/footerTabs/FooterTabs';
import FooterSearch from '../components/footerSearch/FooterSearch';
import Footer from '../components/footer/Footer';
const Product = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { productsList } = value;

        if (productsList.length <= 0) {
          return (
            <React.Fragment>
              <Nav />
              <div className='empty-cart-title '>
                <div className='empty-content'>
                  <p>Get ready for the adventure</p>
                  <h1>See our store..!!</h1>

                  <Link className='go-home-btn' to='/'>
                    <button>Go Home</button>
                  </Link>
                </div>
              </div>
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment>
              <Nav />
              <ProductsList />
              <FooterTabs />
              <FooterSearch />
              <Footer />
            </React.Fragment>
          );
        }
      }}
    </ShopContext.Consumer>
  );
};

export default Product;
