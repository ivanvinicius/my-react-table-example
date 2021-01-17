import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Table = styled.table`
  display: table;
  width: 100%;
  max-width: 800px;
  margin: 50px 0;
  border-radius: 10px;
  box-shadow: 6px 6px 9px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background-color: var(--color-white);
  transition: all 0.3s;

  th,
  td {
    border-bottom: 1px solid var(--color-line-in-white);
    text-align: left;
    padding: 16px;
  }

  &,
  th,
  td {
    border-collapse: collapse;
  }

  tbody tr:hover {
    color: var(--color-purple);
  }
`;

export const PaginationButtons = styled.div`

  button {
    margin: 5px;
    padding: 0 5px;
  }
`;
