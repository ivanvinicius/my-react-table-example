import React, { useState } from 'react';
import { useAsyncDebounce } from 'react-table';

import { Input } from './styles';

export default function GlobalInputFilter({ globalFilter, setGlobalFilter }) {
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((eventValue) => {
    setGlobalFilter(eventValue || undefined);
  }, 200);

  return (
    <Input
      value={value || ''}
      onChange={(e) => {
        setValue(e.target.value);
        onChange(e.target.value);
      }}
      placeholder="Pesquisar..."
    />
  );
}
