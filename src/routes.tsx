import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Table from './pages/Table';
import PaginationRowSelectionTable from './pages/PaginationRowSelectionTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Table} />

        <Route path="/row" component={PaginationRowSelectionTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
