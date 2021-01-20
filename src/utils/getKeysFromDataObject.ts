import IColumnProps from '../dtos/IColumnProps';

/**
 * Transform the key from object as a property of column
 * @param key string;
 */
function getKeysFromDataObject(key: string): IColumnProps {
  return {
    Header: key.charAt(0).toUpperCase() + key.slice(1),
    accessor: key,
  };
}

export default getKeysFromDataObject;
