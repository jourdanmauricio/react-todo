import { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

const TodoCounter = () => {
  const { completedTodos, todos } = useContext(TodoContext);

  return (
    <h1 className='text-2xl text-center p-12 font-normal'>
      Has completado <span className='font-bold'>{completedTodos}</span> de{' '}
      <span className='font-bold'>{todos.length}</span> TODOS
    </h1>
  );
};
export { TodoCounter };
