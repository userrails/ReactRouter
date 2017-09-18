import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home';

export default () => (
  <BrowserRouter>
  <div>
    <Route path="/" exact component={Home} />
    <Route path="/home" exact component={Home} />
  </div>
  </BrowserRouter>
);
