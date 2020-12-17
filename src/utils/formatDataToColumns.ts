interface IReturnProps {
  Header: string;
  accessor: string;
}

function formatDataToColumns(key: string): IReturnProps {
  return {
    Header: key.charAt(0).toUpperCase() + key.slice(1),
    accessor: key,
  };
}

export default formatDataToColumns;
