import { MdOutlineClear } from 'react-icons/md';
import { MdCheck } from 'react-icons/md';

const TodosSkeleton = () => {
  return (
    <ul className='w-full'>
      {[1, 2, 3].map((todo) => (
        <li
          key={todo}
          className='flex justify-between gap-8 items-center mt-8 px-6 py-4 shadow-sm rounded-lg bg-gray-800 w-full animate-pulse'
        >
          <span className='text-2xl font-bold text-gray-700'>
            <MdCheck className='w-8 h-8 text-gray-600' />
          </span>
          <p className='text-lg grow text-start bg-gray-700 rounded-md h-6'></p>
          <span className='text-2xl font-bold text-gray-700 relative -top-7'>
            <MdOutlineClear className='w-8 h-8 text-gray-600' />
          </span>
        </li>
      ))}
    </ul>
  );
};

export { TodosSkeleton };
