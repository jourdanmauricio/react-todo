import { useContext } from 'react';

import { TodoContext } from '../../TodoContext';

const CreateTodoButton = () => {
  const { handleOpenModal } = useContext(TodoContext);
  return (
    <button
      onClick={handleOpenModal}
      className='bg-cyan-400 shadow-[0px_0px_4px_white] border-0 rounded-full cursor-pointer text-5xl fixed bottom-6 right-6 font-bold text-gray-100 flex justify-center items-center h-16 w-16 rotate-0 transition-transform ease-in-out delay-150 hover:rotate-[224deg] transform-origin-center z-10'
    >
      {' '}
      <span className='relative -top-[2px]'>+</span>
    </button>
  );
};
export default CreateTodoButton;
