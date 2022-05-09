import React from 'react';
import Todo from '../models/todo';
import '../App.css';

const List: React.FC<{
  todo: Todo;
  onRemoveTodo: (todoId: number) => void;
}> = ({ todo, onRemoveTodo }) => {
  return (
    <>
      <li className="item" key={todo.getId()} id={`todo-item-${todo.getId()}`}>
        {todo.getText()}
      </li>
      <button
        className="button"
        id={`complete-button=${todo.getId()}`}
        onClick={() => onRemoveTodo(todo.getId())}
      >
        DONE
      </button>
    </>
  );
};

export default List;
