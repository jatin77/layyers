import React from 'react';
import { ShopContext } from '../../context';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const FooterTabs = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const {
          footerToggledSecond,
          footerTabClicked,
          footerToggledFirst
        } = value;
        return (
          <div className='footer-tabs'>
            <div className='footer-tabs-wide'>
              <div className='footer-tabs-wide-layers footer-tabs-wide-content'>
                <p>layers</p>
                <ul>
                  <li>About layers </li>
                  <li> Terms and Conditions </li>
                  <li>Privacy Policy </li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              <div className='footer-tabs-wide-customer footer-tabs-wide-content'>
                <p>customer service</p>
                <ul>
                  <li>order status </li>
                  <li> payment methods </li>
                  <li>shipping </li>
                  <li>product returns</li>
                  <li>service and repair</li>
                  <li>contact us</li>
                </ul>
              </div>
            </div>
            <div
              className='footer-tabs-mobile'
              onClick={e => footerTabClicked(e)}
            >
              <div className='footer-tabs-mobile-drop'>
                <div className='footer-tabs-mobile-dropdown footer-tabs-mobile-dropdown1'>
                  <p>Layers</p>
                  {footerToggledFirst ? (
                    <IoIosArrowUp
                      className='footerDropIcon'
                      data-type-name='dropFooterIcon1'
                    />
                  ) : (
                    <IoIosArrowDown
                      className='footerDropIcon'
                      data-type-name='dropFooterIcon1'
                    />
                  )}
                </div>
                <ul>
                  <li>About layers </li>
                  <li> Terms and Conditions </li>
                  <li>Privacy Policy </li>
                  <li>Cookie Policy</li>
                </ul>
              </div>
              <div className='footer-tabs-mobile-drop'>
                <div className='footer-tabs-mobile-dropdown'>
                  <p>customer service</p>
                  {footerToggledSecond ? (
                    <IoIosArrowUp
                      className='footerDropIcon'
                      data-type-name='dropFooterIcon2'
                    />
                  ) : (
                    <IoIosArrowDown
                      className='footerDropIcon'
                      data-type-name='dropFooterIcon2'
                    />
                  )}
                </div>
                <ul>
                  <li>order status </li>
                  <li> payment methods </li>
                  <li>shipping </li>
                  <li>product returns</li>
                  <li>service and repair</li>
                  <li>contact us</li>
                </ul>
              </div>
            </div>
          </div>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default FooterTabs;
