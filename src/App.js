import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Details from './pages/Details';
import Cart from './pages/Cart';
import './styles/styles.css';

const App = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/product/type/:slug' component={Product} />
        <Route path='/cart' component={Cart} />
        <Route path='/product/detail/:slug' component={Details} />
      </Switch>
    </Fragment>
  );
};

export default App;
