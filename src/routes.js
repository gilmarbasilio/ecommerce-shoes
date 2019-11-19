import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  );
}
