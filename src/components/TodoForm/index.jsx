import { useState, useEffect } from 'react';

import { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState('');
  const [error, setError] = useState(null);

  const { handleOpenModal, addTodo } = useContext(TodoContext);

  useEffect(() => {
    const close = (e) => {
      if (e.keyCode === 27) {
        handleOpenModal();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // const formData = new FormData(event.target);
    // const data = Object.fromEntries(formData.entries());
    // const text = formData.get('todo');
    // addTodo(text);
    if (newTodo.trim() === '') {
      setError('El TODO no puede estar vacío');
      return;
    }
    addTodo(newTodo);
    handleOpenModal();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-4 min-w-[350px] max-w-[500px] bg-gray-950 justify-center items-center p-8 rounded'
    >
      <label htmlFor='todo' className='text-center text-2xl py-8 font-normal'>
        Escribe tu nuevo TODO
      </label>
      <div className='relative w-full'>
        <textarea
          id='todo'
          name='todo'
          className='p-4 w-full bg-gray-800 rounded'
          rows='3'
          placeholder='Cortar la cebolla para el almuerzo'
          value={newTodo}
          onChange={(event) => setNewTodo(event.target.value)}
        />
        {error && <p className='text-red-500 absolute'>{error}</p>}
      </div>

      <div className='flex justify-between gap-8 mt-12'>
        <button
          onClick={handleOpenModal}
          type='button'
          className='p-2 w-[150px] hover:bg-gray-900 rounded'
        >
          Cancelar
        </button>
        <button
          type='submit'
          className='p-2 w-[150px] bg-cyan-500 hover:bg-cyan-600 font-bold rounded '
        >
          Crear TODO
        </button>
      </div>
    </form>
  );
};
export default TodoForm;
