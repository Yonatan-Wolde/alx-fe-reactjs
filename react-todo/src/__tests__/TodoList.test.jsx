import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  test('renders initial todos', () => {
    render(<TodoList />);
    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
    expect(screen.getByText(/Build a Todo App/i)).toBeInTheDocument();
    expect(screen.getByText(/Write tests/i)).toBeInTheDocument();
  });

  test('adds a new todo', () => {
    render(<TodoList />);
    const input = screen.getByLabelText(/New todo/i);
    const addButton = screen.getByText(/Add/i);

    userEvent.type(input, 'New todo item');
    fireEvent.click(addButton);

    expect(screen.getByText('New todo item')).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('toggles todo completion on click', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    // Initially not completed (no line-through)
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle('text-decoration: line-through');

    fireEvent.click(todoItem);
    expect(todoItem).not.toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Build a Todo App/i);
    const deleteButton = screen.getByLabelText(/Delete todo Build a Todo App/i);

    fireEvent.click(deleteButton);

    expect(todoItem).not.toBeInTheDocument();
  });
});
