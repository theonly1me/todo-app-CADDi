import React, { useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import Todo from './models/todo';
import NewTodo from './components/NewTodo';

import './App.css';

// TODO: Please implement this component.
const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const onAddTodo = (todoText: string) => {
    setTodos(prevState => [...prevState, new Todo(todoText)]);
  };

  const onRemoveTodo = (todoId: number) => {
    setTodos(prevState => prevState.filter(todo => todo.getId() !== todoId));
  };

  return (
    <div className="App">
      <Header />
      <TaskList items={todos} onRemoveTodo={onRemoveTodo} />
      <NewTodo onAddTodo={onAddTodo} />
    </div>
  );
};

export default App;
