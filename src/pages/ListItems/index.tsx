import React, { useState, useEffect } from 'react';

import Table from '../../components/ReactTable';

import api from '../../services/api';
import IStateProps from '../../dtos/IStateProps';

const ListItems: React.FC = () => {
  const [states, setStates] = useState<IStateProps[]>([{} as IStateProps]);

  useEffect(() => {
    api.get('/states').then((response) => {
      const formattedData = response.data.map((state: IStateProps) => ({
        ...state,
      }));

      setStates(formattedData);
    });
  }, []);

  return <Table data={states} />;
};

export default ListItems;
