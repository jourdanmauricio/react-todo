import { useState } from 'react';

import { useLocalStorage } from '../../hooks/useLocalStorage';
import './App.css';
import AppUi from './AppUi';

function App() {
  const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOS_V1', []);
  const [search, setSearch] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(search.toLowerCase())
  );
  const completedTodos = todos.filter((todo) => !!todo.completed).length;

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const addTodo = (text) => {
    const newTodo = { text, completed: false };
    saveTodos([...todos, newTodo]);
  };

  return (
    <AppUi
      todos={todos}
      search={search}
      filteredTodos={filteredTodos}
      completedTodos={completedTodos}
      loading={loading}
      error={error}
      setSearch={setSearch}
      completeTodo={completeTodo}
      deleteTodo={deleteTodo}
      openModal={openModal}
      handleOpenModal={() => setOpenModal(!openModal)}
      addTodo={addTodo}
    />
  );
}

export default App;
