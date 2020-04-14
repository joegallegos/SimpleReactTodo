import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      <ul className="todoListUl">
        {todos.map((todo) => (
          <Todo
            className="todo"
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
