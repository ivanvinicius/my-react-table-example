import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Dashboard from './pages/Dashboard';
import Table from './pages/Table';
import PaginationRowSelectionTable from './pages/PaginationRowSelectionTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/table" component={Table} />

        <Route
          path="/pag-row-selection"
          component={PaginationRowSelectionTable}
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
