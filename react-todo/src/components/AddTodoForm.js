import React, { useState } from 'react';

const AddTodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue(''); // Clear input after adding
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new todo..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        data-testid="new-todo-input" // For testing
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodoForm;