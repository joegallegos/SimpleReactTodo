import React from 'react';
import { Button, Checkbox } from '@blueprintjs/core';

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckbox = () => {
    toggleComplete(todo.id);
  };

  const handleRemove = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todoRoot">
      <Checkbox className="todoCheckBox" onClick={handleCheckbox} />
      <li
        className="todoListItem"
        style={{
          textDecoration: todo.completed ? 'line-through' : null,
        }}
      >
        {todo.task}
      </li>
      <Button
        className="todoListItemButton"
        intent="danger"
        onClick={handleRemove}
        rightIcon="cross"
      />
    </div>
  );
};

export default Todo;
