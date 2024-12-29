import { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

const TodoSearch = () => {
  const { search, setSearch } = useContext(TodoContext);
  return (
    <input
      onChange={(event) => setSearch(event.target.value)}
      value={search}
      className='my-0 p-4 rounded w-full'
      placeholder='Cortar cebolla'
    />
  );
};
export default TodoSearch;
