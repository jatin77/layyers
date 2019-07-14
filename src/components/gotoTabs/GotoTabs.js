import React from 'react';
import { Link } from 'react-router-dom';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';
import { ShopContext } from '../../context';
import sleepingBag from '../../styles/images/1684x1191px_SLEEPINGBAG_01_notext.jpg';
import tent from '../../styles/images/1684x1191px_TENT_01_notext.jpg';
import bag from '../../styles/images/1684x1191px_BAGS_01_notext.jpg';

const GotoTabs = () => {
  return (
    <ShopContext.Consumer>
      {value => {
        const { navClicked } = value;
        return (
          <div className='tabs' onClick={e => navClicked(e)}>
            <div className='tabs-link tab1'>
              <div className='tabs-link-goto-img tabs-link-goto-img1'>
                <img
                  src='https://nomad.nl/nl/wp-content/uploads/sites/2/2019/06/NOMAD®Sleepingbag.png'
                  alt=''
                />

                <div className='tabs-link-goto-img-content'>
                  <Link
                    data-product-type='sleepingBag'
                    to='/product/type/sleepingBag'
                  >
                    {' '}
                    sleeping bag <MdNavigateNext />
                  </Link>
                </div>
              </div>
              <div className='tabs-link-pic'>
                <img src={sleepingBag} alt='' />
                <div className='tabs-link-pic-content'>
                  <p>I sleep anywhere</p>
                </div>
              </div>
            </div>
            <div className='tabs-link tab2'>
              <div className='tabs-link-pic tabs-link-pic2'>
                <img src={tent} alt='' />
                <div className='tabs-link-pic-content tabs-link-pic-content2'>
                  <p>I will never not not move</p>
                </div>
              </div>
              <div className='tabs-link-goto-img tabs-link-goto-img2'>
                <img
                  src='https://nomad.nl/nl/wp-content/uploads/sites/2/2019/06/NOMAD®-Tent.png'
                  alt=''
                />

                <div className='tabs-link-goto-img-content'>
                  <Link data-product-type='tents' to='/product/type/tents'>
                    {' '}
                    <MdNavigateBefore /> tents
                  </Link>
                </div>
              </div>
            </div>
            <div className='tabs-link tab3'>
              <div className='tabs-link-goto-img tabs-link-goto-img3'>
                <img
                  src='https://nomad.nl/nl/wp-content/uploads/sites/2/2019/06/NOMAD®Backpacks.png'
                  alt=''
                />

                <div className='tabs-link-goto-img-content'>
                  <Link
                    data-product-type='bags&backpacks'
                    to='/product/type/bags&backpacks'
                  >
                    {' '}
                    Bags & backpacks <MdNavigateNext />
                  </Link>
                </div>
              </div>
              <div className='tabs-link-pic'>
                <img src={bag} alt='' />
                <div className='tabs-link-pic-content'>
                  <p>I live to leave</p>
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </ShopContext.Consumer>
  );
};

export default GotoTabs;
