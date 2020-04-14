import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Button, InputGroup } from '@blueprintjs/core';

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: '',
    task: '',
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    // setTodo({ ...todo, task: e.target.value });
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: '' });
    }
  };

  return (
    <form className="todoFormRoot" onSubmit={handleSubmit}>
      <InputGroup
        className="todoFormInput"
        name="task"
        type="text"
        value={todo.task}
        onChange={handleTaskInputChange}
      />
      <Button text="Add" intent="primary" type="submit" icon="add" />
    </form>
  );
};

export default TodoForm;
