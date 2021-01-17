import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="simple">Simple Table - TSX</Link>
        </li>
        <li>
          <Link to="filter">Table with Filter - JSX</Link>
        </li>
        <li>
          <Link to="pagination">Table with Pagination - JSX</Link>
        </li>
        <li>
          <Link to="pag-row-selection">
            Table with Row Selection and Pagination - JSX
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Dashboard;
