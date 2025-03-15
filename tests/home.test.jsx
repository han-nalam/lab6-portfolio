import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../src/pages/home';

describe('Home Component', () => {
  test('renders welcome message', () => {
    render(<Home />);

    // Check if the welcome message is rendered
    expect(screen.getByText(/Welcome to My Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Hi, I'm/i)).toBeInTheDocument();
  });
});