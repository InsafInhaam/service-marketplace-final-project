import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux'; // If your component uses Redux
import { MemoryRouter } from 'react-router-dom'; // If your component uses react-router-dom
import { toast } from 'react-hot-toast';
import Login from './Login';

// Mocking react-hot-toast to prevent actual toasts during tests
jest.mock('react-hot-toast', () => ({
  error: jest.fn(),
  success: jest.fn(),
}));

describe('Login Component', () => {
  // Mock Redux store and router context if needed
  const MockProvider = ({ children }) => (
    <Provider store={mockedStore}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );

  it('displays error when submitting empty form', () => {
    render(<Login />, { wrapper: MockProvider });

    fireEvent.click(screen.getByText('Log In'));

    expect(toast.error).toHaveBeenCalledWith('Please enter a valid email address');
    expect(toast.error).toHaveBeenCalledWith('Please enter a password');
  });

  it('displays success message and redirects on successful login', async () => {
    // Mock the fetch response for a successful login
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue({
        token: 'fakeToken',
        user: { id: 1, name: 'John' },
        message: 'Login successful',
      }),
    });

    render(<Login />, { wrapper: MockProvider });

    const emailInput = screen.getByPlaceholderText('Enter your email address');
    const passwordInput = screen.getByPlaceholderText('Your Password');
    const loginButton = screen.getByText('Log In');

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    fireEvent.click(loginButton);

    await waitFor(() => {
      expect(localStorage.setItem).toHaveBeenCalledWith('jwt', 'fakeToken');
      expect(localStorage.setItem).toHaveBeenCalledWith(
        'user',
        JSON.stringify({ id: 1, name: 'John' })
      );
      expect(toast.success).toHaveBeenCalledWith('Login successful');
      expect(historyMock).toHaveBeenCalledWith('/');
    });
  });

  // ... More test cases for different scenarios

  // Clean up mock fetch after all tests
  afterAll(() => {
    global.fetch.mockRestore();
  });
});
