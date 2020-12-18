import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="simple">Simple Table</Link>
        </li>
        <li>
          <Link to="pagination">Pagination Table with Row Selection</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Dashboard;
