import React, { useState, useEffect, useMemo } from 'react';
import { useTable, Column } from 'react-table';

import api from '../../services/api';
import formatDataToColumns from '../../utils/formatDataToColumns';
import IStateProps from '../../dtos/IStateProps';

import { Table } from './styles';

const SimpleTable: React.FC = () => {
  const [states, setStates] = useState<IStateProps[]>([{} as IStateProps]);

  const columns = useMemo<Column<IStateProps>[]>(() => {
    const items: any = []; //eslint-disable-line

    Object.keys(states[0]).map((key) => {
      return items.push(formatDataToColumns(key));
    });

    return items;
  }, [states]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable<IStateProps>({ columns, data: states });

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

export default SimpleTable;
