import React, { Component } from 'react';

import { ShopContext } from '../../context';
class Total extends Component {
  render() {
    return (
      <ShopContext.Consumer>
        {value => {
          return (
            <div className='total-values container'>
              <div className='total-content'>
                <div className='sub-total'>
                  <p>
                    <b>Subtotal</b> ${value.subTotal}
                  </p>
                </div>
                <div className='tax'>
                  <p>
                    <b>tax</b> ${value.tax}
                  </p>
                </div>
                <div className='total'>
                  <p>
                    <b>your total</b> ${value.total}
                  </p>
                </div>
              </div>
            </div>
          );
        }}
      </ShopContext.Consumer>
    );
  }
}

export default Total;
