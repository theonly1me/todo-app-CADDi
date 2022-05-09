import React, { useRef } from 'react';
import '../App.css';

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = ({
  onAddTodo,
}) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = todoTextInputRef.current!.value;
    if (!enteredText.trim().length) return;
    onAddTodo(enteredText);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <input type="text" id="todo-input" ref={todoTextInputRef} />
      <button id="add-button" className="button">
        Add Todo
      </button>
    </form>
  );
};

export default NewTodo;
