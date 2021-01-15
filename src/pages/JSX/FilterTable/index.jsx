import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useGlobalFilter } from 'react-table';

import api from '../../../services/api';
import formatDataToColumns from '../../../utils/formatDataToColumns';

import GlobalInputFilter from './GlobalInputFilter';

import { Table } from './styles';

export default function FilterTable() {
  const [states, setStates] = useState([
    {
      id: 0,
      name: '',
      country: '',
      region: '',
    },
  ]);

  const columns = useMemo(() => {
    const items = [];

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
  } = useTable({ columns, data: states }, useGlobalFilter);

  useEffect(() => {
    api.get('/states').then((response) => {
      const formattedStatesToTable = response.data.map(
        ({ id, name, country, region }) => ({ id, name, country, region }),
      );

      setStates(formattedStatesToTable);
    });
  }, []);

  return (
    <Table {...getTableProps()}>
      <thead>
        <tr>
          <th colSpan="4">
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
