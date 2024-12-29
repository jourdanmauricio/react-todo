const TodoSearch = ({ search, setSearch }) => {
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
