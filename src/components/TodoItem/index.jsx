import { MdDeleteOutline } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className='flex justify-between gap-8 items-center mt-8 px-6 shadow-[0px_0px_4px_white] w-full'>
      <span
        onClick={() => onComplete(text)}
        className={`cursor-pointer hover:text-green-500 ${completed && 'text-green-500'}`}
      >
        <MdCheck className='w-8 h-8' />
      </span>
      <p className={`my-4 text-lg grow text-start ${completed && 'line-through'}`}>{text}</p>
      <span onClick={() => onDelete(text)} className='hover:text-red-500 cursor-pointer'>
        <MdDeleteOutline className='w-7 h-7' />
      </span>
    </li>
  );
};
export { TodoItem };
