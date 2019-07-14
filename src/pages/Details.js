import React, { Component } from 'react';
import Nav from '../components/nav/Nav';
import ProductDetails from '../components/products/ProductDetails';
import FooterTabs from '../components/footerTabs/FooterTabs';
import FooterSearch from '../components/footerSearch/FooterSearch';
import Footer from '../components/footer/Footer';

class Details extends Component {
  render() {
    const slug = this.props.match.params.slug;
    console.log(slug);
    return (
      <React.Fragment>
        <Nav />
        <ProductDetails slug={slug} />
        <FooterTabs />
        <FooterSearch />
        <Footer />
      </React.Fragment>
    );
  }
}

export default Details;
