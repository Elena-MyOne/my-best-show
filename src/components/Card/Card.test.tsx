import { fireEvent, render, screen } from '@testing-library/react';
import Card from './Card';
import { describe, expect, it, vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';
import { mockShow } from '../../data/mockData';

const MockCard = () => {
  return (
    <BrowserRouter>
      <Card show={mockShow} setIsCardItemsDarked={vi.fn()} />
    </BrowserRouter>
  );
};

describe('Card component', () => {
  it('renders error message when show is null', () => {
    render(<Card show={null} setIsCardItemsDarked={vi.fn()} />);
    const errorMessage = screen.getByText(/No show data available/i);
    expect(errorMessage).toBeInTheDocument();
  });

  it('renders card component when show is provided', () => {
    render(<MockCard />);
    const cardElement = screen.getByTestId('card');
    expect(cardElement).toBeInTheDocument();
  });

  it('navigates to details page when clicked', async () => {
    render(<MockCard />);
    const cardElement = screen.getByTestId('card');
    fireEvent.click(cardElement);

    const expectedURL = `/shows/details/${mockShow.id}`;
    expect(window.location.pathname).toBe(expectedURL);
  });
});
