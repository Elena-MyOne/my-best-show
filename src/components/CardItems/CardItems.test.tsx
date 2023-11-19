import { act, render, screen, waitFor } from '@testing-library/react';
import CardItems from './CardItems';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mockShowsList } from '../../data/mockData';

const MockCardItems = () => {
  return (
    <BrowserRouter>
      <CardItems shows={mockShowsList} />
    </BrowserRouter>
  );
};

describe('Card Items rendering', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockShowsList,
      })
    );

    await act(async () => {
      render(<MockCardItems />);
    });
  });

  it('render cards and verify component has the specified number of cards', async () => {
    const cards = await waitFor(() => screen.getAllByTestId('card'));

    expect(screen.getByText(/Under the Dome/i)).toBeInTheDocument();
    expect(screen.getByText(/Person of Interest/i)).toBeInTheDocument();
    expect(screen.getByText(/Bitten/i)).toBeInTheDocument();

    expect(cards.length).toBe(3);
  });
});
