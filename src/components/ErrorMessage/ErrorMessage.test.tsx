import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, it } from 'vitest';

const MockErrorMessage = () => {
  return (
    <BrowserRouter>
      <ErrorMessage />
    </BrowserRouter>
  );
};

describe('Error message component', () => {
  it('message is displayed if no cards are present on Main Page', () => {
    render(<MockErrorMessage />);
    const errorMessage = screen.getByText(/Error occurred please try later/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
