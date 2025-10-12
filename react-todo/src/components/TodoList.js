import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';
import './TodoList.css'; // Assuming you might add some basic CSS

// Initial state for demonstration
const initialTodos = [
  { id: 1, text: 'Buy groceries', completed: false },
  { id: 2, text: 'Walk the dog', completed: true },
  { id: 3, text: 'Implement TodoList component', completed: false },
];

const TodoList = () => {
  const [todos, setTodos] = useState(initialTodos);

  // --- Methods for Todo Management ---

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(), // Simple unique ID
      text,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1>React Todo List 📝</h1>
      
      <AddTodoForm onAddTodo={addTodo} />

      {todos.length === 0 ? (
        <p data-testid="no-todos-message">No todos yet!</p>
      ) : (
        <ul data-testid="todo-list">
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '5px 0',
              }}
              onClick={() => toggleTodo(todo.id)}
              data-testid={`todo-item-${todo.id}`} // For testing individual items
              data-completed={todo.completed} // A useful attribute for testing state
            >
              <span>{todo.text}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling when clicking delete
                  deleteTodo(todo.id);
                }}
                aria-label={`Delete ${todo.text}`}
              >
                🗑️ Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;