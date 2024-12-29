import { useContext } from 'react';

import { TodoContext } from '../../TodoContext';
import { TodoCounter } from '../TodoCounter';
import TodoSearch from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { TodosSkeleton } from '../TodosSkeleton';
import CreateTodoButton from '../CreateTodoButton';
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { Modal } from '../Modal';
import TodoForm from '../TodoForm';

const AppUi = () => {
  const { error, loading, filteredTodos, completeTodo, deleteTodo, openModal } =
    useContext(TodoContext);

  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && <TodosSkeleton />}
        {error && <TodosError />}
        {!loading && !filteredTodos.length && <EmptyTodos />}

        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={completeTodo}
            onDelete={deleteTodo}
          />
        ))}
      </TodoList>

      <CreateTodoButton />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
};
export default AppUi;
