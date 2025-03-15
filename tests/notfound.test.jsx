import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NotFound from '../src/pages/notfound';
import '@testing-library/jest-dom';

describe('NotFound Component', () => {
  test('renders 404 message and a link to the Home Page', () => {
    render(
      <Router>
        <NotFound />
      </Router>
    );

    // Check if the 404 message is rendered
    expect(screen.getByText(/404 - Page Not Found/i)).toBeInTheDocument();
    expect(screen.getByText(/Oops! The page you're looking for doesn't exist./i)).toBeInTheDocument();

    // Check if the link to the Home Page is rendered
    const homeLink = screen.getByRole('link', { name: /Go Home/i });
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href', '/');
  });
});