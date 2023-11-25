import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';
import { describe, expect, it } from 'vitest';

describe('Error message component', () => {
  it('message is displayed if no cards are present on Main Page', () => {
    render(<ErrorMessage />);
    const errorMessage = screen.getByText(/Error occurred please try later/i);
    expect(errorMessage).toBeInTheDocument();
  });
});
