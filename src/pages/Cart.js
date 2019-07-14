import React, { Component } from 'react';
import Nav from '../components/nav/Nav';

import { ShopContext } from '../context';
import EmptyCartTitle from '../components/cartRoute/EmptyCartTitle';
import CartHeader from '../components/cartRoute/CartHeader';
import CartTitle from '../components/cartRoute/CartTitle';
import Total from '../components/cartRoute/Total';

import CartList from '../components/cartRoute/CartList';
import FooterTabs from '../components/footerTabs/FooterTabs';
import FooterSearch from '../components/footerSearch/FooterSearch';
import Footer from '../components/footer/Footer';
// import FooterTabs from '../components/footerTabs/FooterTabs';
// import FooterSearch from '../components/footerSearch/FooterSearch';
// import Footer from '../components/footer/Footer';
class Cart extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {value => {
          if (value.cart.length <= 0) {
            return (
              <React.Fragment>
                <Nav />
                <EmptyCartTitle />
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Nav />
                <CartTitle />
                <CartHeader />
                <CartList />
                <Total />
                <FooterTabs />
                <FooterSearch />
                <Footer />
              </React.Fragment>
            );
          }
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Cart;
