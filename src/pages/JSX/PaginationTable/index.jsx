import React, { useEffect, useMemo, useState } from 'react';
import { useTable, usePagination } from 'react-table';

import api from '../../../services/api';
import formatDataToColumns from '../../../utils/formatDataToColumns';

import { Container, Table, PaginationButtons } from './styles';

export default function PaginationTable() {
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
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data: states,
      initialState: { pageIndex: 0 },
    },
    usePagination,
  );

  useEffect(() => {
    api.get('/states').then((response) => {
      const formattedStatesToTable = response.data.map(
        ({ id, name, country, region }) => ({ id, name, country, region }),
      );

      setStates(formattedStatesToTable);
    });
  }, []);

  return (
    <Container>
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
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>

      <PaginationButtons>
        <button
          type="button"
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          {'<<'}
        </button>

        <button
          type="button"
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          {'<'}
        </button>

        <button
          type="button"
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          {'>'}
        </button>

        <button
          type="button"
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          {'>>'}
        </button>

        <span>
          {`Page `}
          <strong>{`${pageIndex + 1} of ${pageOptions.length}`}</strong>
        </span>
      </PaginationButtons>
    </Container>
  );
}
