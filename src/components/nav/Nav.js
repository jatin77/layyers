import React from 'react';
import { Link } from 'react-router-dom';
import { MdPermIdentity, MdShoppingCart } from 'react-icons/md';
import { IoMdList, IoMdClose } from 'react-icons/io';
import NavbarSlider from '../navbarSlider/NavbarSlider';
import { ShopContext } from '../../context';
import Overlay from '../overlay/Overlay';
const Nav = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const {
          toggleClicked,
          toggleHandle,
          navClicked,
          displayOverlay,
          cart
        } = value;
        return (
          <>
            <div className='navbar'>
              <div className='container navbar-content'>
                <div className='navbar-toggle'>
                  {toggleClicked ? (
                    <IoMdClose
                      className='navbar-toggle-icon'
                      onClick={toggleHandle}
                    />
                  ) : (
                    <IoMdList
                      className='navbar-toggle-icon'
                      onClick={toggleHandle}
                    />
                  )}
                </div>
                <div className='navbar-logo'>
                  <Link to='/'>layers</Link>
                </div>
                <nav className='navbar-menu'>
                  <ul className='product-list' onClick={e => navClicked(e)}>
                    <li className='product-head'>
                      <Link
                        data-product-type='sleepingBag'
                        to='/product/type/sleepingBag'
                      >
                        {' '}
                        Our Products
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className='nav-bar-user'>
                  <span>
                    <MdPermIdentity />
                  </span>
                  <span>
                    {' '}
                    <Link to='/cart'>
                      {' '}
                      <MdShoppingCart className='navbar-cart-icon' />
                    </Link>{' '}
                    <p>
                      <small>
                        <b>{cart.length}</b>
                      </small>
                    </p>
                  </span>
                </div>
              </div>
            </div>
            <NavbarSlider />
            {displayOverlay ? <Overlay /> : null}
          </>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default Nav;
