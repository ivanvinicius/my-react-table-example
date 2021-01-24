import React, { useState, useEffect, useMemo } from 'react';
import { Column, useGlobalFilter, usePagination, useTable } from 'react-table';

import api from '../../services/api';
import getKeysFromDataObject from '../../utils/getKeysFromDataObject';
import GlobalInputFilter from '../../components/ReactTable/GlobalInputFilter';

import IStateProps from '../../dtos/IStateProps';
import IColumnProps from '../../dtos/IColumnProps';

import {
  Container,
  ControlsArea,
  ButtonsArea,
  TableContainer,
  ActionsArea,
  Infos,
} from './styles';

const Table: React.FC = () => {
  const [states, setStates] = useState<IStateProps[]>([{} as IStateProps]);

  const columns = useMemo<Column[]>(() => {
    const items: IColumnProps[] = [];

    Object.keys(states[0]).map((key) => items.push(getKeysFromDataObject(key)));

    return items;
  }, [states]);

  const countTableItems = useMemo(() => states.length, [states]);

  useEffect(() => {
    api.get('/states').then((response) => {
      const formattedData = response.data.map(
        ({ id, name, country, region }: IStateProps) => ({
          id,
          name,
          country,
          region,
        }),
      );

      setStates(formattedData);
    });
  }, []);

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
    state: { pageIndex, globalFilter, selectedRowIds },
  } = useTable(
    {
      columns,
      data: states,
      initialState: {
        pageIndex: 0,
        hiddenColumns: ['id'],
      },
    },
    useGlobalFilter,
    usePagination,
  );

  const countItemsSelected = useMemo(() => {
    return selectedRowIds ? selectedRowIds.length : 0;
  }, [selectedRowIds]);

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
          <span>{`${countItemsSelected} items selected`}</span>
        </Infos>
      </ActionsArea>
    </Container>
  );
};

export default Table;
