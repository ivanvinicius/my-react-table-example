import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import { Input } from './styles';

interface IGlobalFilterProps {
  globalFilter: string | undefined;
  setGlobalFilter: (filterValue: string | number | undefined) => void;
}

const GlobalInputFilter: React.FC<IGlobalFilterProps> = ({
  globalFilter,
  setGlobalFilter,
}) => {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((eventValue) => {
    setGlobalFilter(eventValue || undefined);
  }, 200);

  return (
    <Input
      value={value || ''}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Pesquisar..."
    />
  );
};

export default GlobalInputFilter;
