import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SimpleTable from './pages/SimpleTable';
import PaginationTable from './pages/PaginationTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/simple" component={SimpleTable} />
        <Route path="/pagination" component={PaginationTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
