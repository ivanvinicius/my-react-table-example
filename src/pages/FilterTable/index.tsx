import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter, Column } from 'react-table';

import api from '../../services/api';
import formatDataToColumns from '../../utils/formatDataToColumns';
import IStateProps from '../../dtos/IStateProps';

import GlobalInputFilter from './GlobalInputFilter';

import { Table } from './styles';

export default function FilterTable() {
  const [states, setStates] = useState([{} as IStateProps]);

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
    state,
    prepareRow,
    setGlobalFilter,
  } = useTable<IStateProps>({ columns, data: states }, useGlobalFilter);

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
        <tr>
          <th colSpan={4}>
            <GlobalInputFilter
              globalFilter={state.globalFilter}
              setGlobalFilter={setGlobalFilter}
            />
          </th>
        </tr>

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
}
