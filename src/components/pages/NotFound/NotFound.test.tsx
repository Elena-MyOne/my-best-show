import { render, screen } from '@testing-library/react';
import NotFound from './NotFound';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';

const MockNotFound = () => {
  return (
    <BrowserRouter>
      <NotFound />
    </BrowserRouter>
  );
};

describe('404 Page component', () => {
  it('404 page is s displayed when navigating to an invalid route', () => {
    render(<MockNotFound />);
    const notFoundText = screen.getByText(/Oh, man. Page not found/i);
    expect(notFoundText).toBeInTheDocument();

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });
});
