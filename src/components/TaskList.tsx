import React from 'react';
import Todo from '../models/todo';
import List from './List';
import '../App.css';

const TaskList: React.FC<{
  items: Todo[];
  onRemoveTodo: (todoId: number) => void;
}> = props => {
  return (
    <ul className="todos">
      {props.items.map((item: Todo, index) => {
        item.setId(index);
        return <List todo={item} onRemoveTodo={props.onRemoveTodo} />;
      })}
    </ul>
  );
};

export default TaskList;
