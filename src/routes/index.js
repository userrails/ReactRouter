import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

import Home from './Home';
import Contact from './Contact'

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={props => <Home {...props} />} />
      <Route path="/home" exact component={Home} />
      <Route path="/home/2" exact component={Home} />
      <Route path="/contact" exact component={Contact} />
      <Route exact path="/contact" component={Contact} />
      <Link to="/home">
         Click Me
     </Link>
    </Switch>
  </BrowserRouter>
);
