import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="simple">Simple</Link>
        </li>
        <li>
          <Link to="pagination">Pagination</Link>
        </li>
        <li>
          <Link to="filter">Filter - JSX</Link>
        </li>
        <li>
          <Link to="pag-row-selection">Row Selection - JSX</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Dashboard;
