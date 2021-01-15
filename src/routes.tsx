import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SimpleTable from './pages/SimpleTable';

import FilterTable from './pages/JSX/FilterTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/simple" component={SimpleTable} />

        <Route path="/filter" component={FilterTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
