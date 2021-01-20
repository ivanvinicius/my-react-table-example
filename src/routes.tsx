import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import SimpleTable from './pages/SimpleTable';
import PaginationTable from './pages/PaginationTable';

import FilterTable from './pages/JSX/FilterTable';
import PaginationRowSelectionTable from './pages/JSX/PaginationRowSelectionTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />

        <Route path="/simple" component={SimpleTable} />

        <Route path="/filter" component={FilterTable} />
        <Route path="/pagination" component={PaginationTable} />
        <Route
          path="/pag-row-selection"
          component={PaginationRowSelectionTable}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
