import React from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';
import { ShopContext } from '../../context';
const NavbarSlider = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { navClicked, toggleClicked } = value;
        let classDis = toggleClicked ? 'slidebar active' : 'slidebar';
        return (
          <div className={classDis}>
            <nav className='sidebar-nav'>
              <ul
                className='sidebar-nav-mainUl'
                onClick={e => {
                  navClicked(e);
                }}
              >
                <li className='sidebar-nav-mainUl-li'>
                  <div className='sidebar-nav-mainUl-block'>
                    <div>
                      <Link to='/'> Home </Link>
                    </div>
                    <div>
                      <Link to='/'>
                        <IoIosArrowForward className='sideBarDropIcon' />
                      </Link>
                    </div>
                  </div>
                </li>
                <li className='sidebar-nav-mainUl-li'>
                  <div className='sidebar-nav-mainUl-block'>
                    <div>
                      <Link
                        data-product-type='sleepingBag'
                        to='/product/type/sleepingBag'
                      >
                        {' '}
                        our products{' '}
                      </Link>
                    </div>
                    <div>
                      <Link
                        data-product-type='sleepingBag'
                        to='/product/type/sleepingBag'
                      >
                        <IoIosArrowForward className='sideBarDropIcon' />
                      </Link>
                    </div>
                  </div>
                </li>
                <li className='sidebar-nav-mainUl-li'>
                  <div className='sidebar-nav-mainUl-block'>
                    <div>
                      <Link data-product-type='sleepingBag' to='/cart'>
                        {' '}
                        Your Cart{' '}
                      </Link>
                    </div>
                    <div>
                      <Link data-product-type='sleepingBag' to='/cart'>
                        <IoIosArrowForward className='sideBarDropIcon' />
                      </Link>
                    </div>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default NavbarSlider;
