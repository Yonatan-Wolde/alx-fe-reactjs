import React from 'react'; // <--- ADD THIS LINE
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import TodoList from './TodoList';

// ... rest of the test file

// Note: TodoList component uses initial static state for simplicity
// The initial state includes 3 todos: 'Buy groceries' (id: 1, false), 'Walk the dog' (id: 2, true), 'Implement...' (id: 3, false)

describe('TodoList Component', () => {

  // ------------------------------------------------------------------
  // Test 1: Initial Render Test
  // ------------------------------------------------------------------
  test('renders the component and initial todos', () => {
    render(<TodoList />);

    // Check for the main heading
    expect(screen.getByRole('heading', { name: /react todo list/i })).toBeInTheDocument();
    
    // Check that the initial 3 todo items are rendered
    const todoItems = screen.getAllByRole('listitem');
    expect(todoItems).toHaveLength(3);

    // Check for specific text content
    expect(screen.getByText('Buy groceries')).toBeInTheDocument();
    expect(screen.getByText('Walk the dog')).toBeInTheDocument();
    expect(screen.getByText('Implement TodoList component')).toBeInTheDocument();
  });

  // ------------------------------------------------------------------
  // Test 2: Test Adding Todos
  // ------------------------------------------------------------------
  test('allows a user to add a new todo item', () => {
    render(<TodoList />);

    const input = screen.getByTestId('new-todo-input');
    const addButton = screen.getByRole('button', { name: /add todo/i });
    
    const newTodoText = 'New Test Todo';

    // 1. Simulate user input
    fireEvent.change(input, { target: { value: newTodoText } });
    expect(input.value).toBe(newTodoText);

    // 2. Simulate form submission (clicking the button)
    fireEvent.click(addButton);

    // 3. Verify the new todo is in the list
    expect(screen.getByText(newTodoText)).toBeInTheDocument();

    // 4. Verify the total number of items has increased (3 initial + 1 new = 4)
    expect(screen.getAllByRole('listitem')).toHaveLength(4);

    // 5. Verify the input field is cleared
    expect(input.value).toBe('');
  });

  // ------------------------------------------------------------------
  // Test 3: Test Toggling Todos
  // ------------------------------------------------------------------
  test('allows a user to toggle a todo item completion status', () => {
    render(<TodoList />);
    
    // Target the first incomplete todo: 'Buy groceries' (id: 1)
    const todoToToggle = screen.getByText('Buy groceries').closest('li');

    // Initial state check: It should NOT be marked as completed (data-completed="false")
    expect(todoToToggle).toHaveAttribute('data-completed', 'false');

    // 1. Simulate click to toggle the completion status
    fireEvent.click(todoToToggle);

    // 2. Verify state change: It should now be marked as completed (data-completed="true")
    expect(todoToToggle).toHaveAttribute('data-completed', 'true');
    
    // 3. Simulate another click to toggle it back
    fireEvent.click(todoToToggle);
    
    // 4. Verify state change: It should be incomplete again
    expect(todoToToggle).toHaveAttribute('data-completed', 'false');
  });

  // ------------------------------------------------------------------
  // Test 4: Test Deleting Todos
  // ------------------------------------------------------------------
  test('allows a user to delete a todo item', () => {
    render(<TodoList />);

    const initialItemCount = screen.getAllByRole('listitem').length; // Should be 3

    // Target the todo to delete: 'Walk the dog'
    const todoText = 'Walk the dog';
    const deleteButton = screen.getByRole('button', { name: `Delete ${todoText}` });
    
    // 1. Simulate click on the delete button
    fireEvent.click(deleteButton);

    // 2. Verify the todo item is no longer in the document
    expect(screen.queryByText(todoText)).not.toBeInTheDocument();

    // 3. Verify the total number of items has decreased (3 initial - 1 deleted = 2)
    const finalItemCount = screen.getAllByRole('listitem').length;
    expect(finalItemCount).toBe(initialItemCount - 1);
  });

});