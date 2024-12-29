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

const AppUi = ({
  todos,
  loading,
  error,
  search,
  setSearch,
  completeTodo,
  deleteTodo,
  filteredTodos,
  completedTodos,
  openModal,
  handleOpenModal,
  addTodo,
}) => {
  return (
    <>
      <TodoCounter total={todos.length} completed={completedTodos} />
      <TodoSearch search={search} setSearch={setSearch} />

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

      <CreateTodoButton onOpenModal={handleOpenModal} />

      {openModal && (
        <Modal>
          <TodoForm handleOpenModal={handleOpenModal} addTodo={addTodo} />
        </Modal>
      )}
    </>
  );
};
export default AppUi;
