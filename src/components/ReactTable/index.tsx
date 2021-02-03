import React, { useMemo } from 'react';
import {
  Column,
  useGlobalFilter,
  usePagination,
  useRowSelect,
  useTable,
} from 'react-table';

import getKeysFromDataObject from '../../utils/getKeysFromDataObject';

import GlobalInputFilter from './GlobalInputFilter';
import IndeterminateInput from './IndeterminateInput';

import IColumnProps from '../../dtos/IColumnProps';

import {
  Container,
  ControlsArea,
  ButtonsArea,
  TableContainer,
  ActionsArea,
  Infos,
} from './styles';

interface ITableProps {
  data: Array<{}>;
}

const Table: React.FC<ITableProps> = ({ data }) => {
  const columns = useMemo<Column[]>(() => {
    const items: IColumnProps[] = [];

    Object.keys(data[0]).map((key) => items.push(getKeysFromDataObject(key)));

    return items;
  }, [data]);

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
    setGlobalFilter,
    state: { pageIndex, globalFilter },
  } = useTable(
    {
      columns,
      data,
      initialState: {
        pageIndex: 0,
        hiddenColumns: ['id'],
      },
    },
    useGlobalFilter,
    usePagination,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((allColumns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllPageRowsSelectedProps }) => (
            <div>
              <IndeterminateInput
                name=""
                {...getToggleAllPageRowsSelectedProps()}
              />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateInput
                name=""
                {...row.getToggleRowSelectedProps()}
              />
            </div>
          ),
        },
        ...allColumns,
      ]);
    },
  );

  const countTableItems = useMemo(() => data.length, [data]);

  return (
    <Container>
      <ControlsArea>
        <GlobalInputFilter
          globalFilter={globalFilter}
          setGlobalFilter={setGlobalFilter}
        />

        <ButtonsArea>
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
        </ButtonsArea>
      </ControlsArea>

      <TableContainer {...getTableProps()}>
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
      </TableContainer>

      <ActionsArea>
        <div />

        <Infos>
          <span>{`Page ${pageIndex + 1} of ${pageOptions.length}`}</span>
          <span>{`${countTableItems} items`}</span>
        </Infos>
      </ActionsArea>
    </Container>
  );
};

export default Table;
