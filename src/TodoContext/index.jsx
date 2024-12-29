import React, { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({ children }) {
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
    <TodoContext.Provider
      value={{
        todos,
        filteredTodos,
        completedTodos,
        loading,
        error,
        search,
        openModal,
        saveItem: saveTodos,
        completeTodo,
        deleteTodo,
        addTodo,
        setSearch,
        handleOpenModal: () => setOpenModal(!openModal),
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };
