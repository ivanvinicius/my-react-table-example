import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './pages/ListItems';
import PaginationRowSelectionTable from './pages/PaginationRowSelectionTable';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={List} />

        <Route path="/row" component={PaginationRowSelectionTable} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
