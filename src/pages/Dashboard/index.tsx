import React, { useState, useEffect } from 'react';
import { useTable, Column } from 'react-table';

import api from '../../services/api';
import { Table } from './styles';

interface IStateProps {
  id: number;
  name: string;
  country: string;
  region: string;
}

const Dashboard: React.FC = () => {
  const [states, setStates] = useState<IStateProps[]>([{} as IStateProps]);

  useEffect(() => {
    api.get('/states').then((response) => {
      const formattedStatesToTable: IStateProps[] = response.data.map(
        ({ id, name, country, region }: IStateProps) => ({
          id,
          name,
          country,
          region,
        }),
      );

      setStates(formattedStatesToTable);
    });
  }, []);

  const columns = React.useMemo<Column<IStateProps>[]>(
    () => [
      {
        Header: 'Id',
        accessor: 'id',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Country',
        accessor: 'country',
      },
      {
        Header: 'Region',
        accessor: 'region',
      },
    ],
    [],
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<IStateProps>({ columns, data: states });

  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default Dashboard;
