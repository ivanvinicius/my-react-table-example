import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/table">Table</Link>
        </li>
        <br />
        <li>
          <Link to="pag-row-selection">Row Selection - JSX</Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
