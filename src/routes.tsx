import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/ListItems';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
