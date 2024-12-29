const TodoCounter = ({ total, completed }) => {
  return (
    <h1 className='text-2xl text-center p-12 font-normal'>
      Has completado <span className='font-bold'>{completed}</span> de{' '}
      <span className='font-bold'>{total}</span> TODOS
    </h1>
  );
};
export { TodoCounter };
