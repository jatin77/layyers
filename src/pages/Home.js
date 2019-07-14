import React from 'react';
import Nav from '../components/nav/Nav';
import LandingHero from '../components/landingHero/LandingHero';
import GotoTabs from '../components/gotoTabs/GotoTabs';
import Insta from '../components/insta/Insta';
import FooterTabs from '../components/footerTabs/FooterTabs';
import FooterSearch from '../components/footerSearch/FooterSearch';
import Footer from '../components/footer/Footer';

const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <LandingHero />
      <GotoTabs />
      <Insta />
      <FooterTabs />
      <FooterSearch />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
