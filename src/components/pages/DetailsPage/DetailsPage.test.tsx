import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import DetailsPage from './DetailsPage';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { mockShow } from '../../../data/mockData';

const MockDetailsPage = () => {
  return (
    <BrowserRouter>
      <DetailsPage />
    </BrowserRouter>
  );
};

describe('Details Page', () => {
  beforeEach(async () => {
    global.fetch = vi.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => mockShow,
      })
    );

    await act(async () => {
      render(<MockDetailsPage />);
    });
  });

  it('the detailed card component correctly displays the detailed card data', async () => {
    await waitFor(() => screen.getAllByTestId('details'));
    expect(screen.getByTestId('details-image')).toBeInTheDocument();
    expect(screen.getByTestId('details-name')).toBeInTheDocument();
    expect(screen.getByTestId('details-rating')).toBeInTheDocument();
    expect(screen.getByTestId('details-summary')).toBeInTheDocument();
    expect(screen.getByText(/Close/i)).toBeInTheDocument();
  });

  it('clicking the close button hides the component', async () => {
    fireEvent.click(screen.getByText(/Close/i));
    await waitFor(() => {
      expect(window.location.pathname).toBe('/');
    });
  });

  it('displays loading indicator while fetching data and then renders detailed card', async () => {
    const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
    global.fetch = vi.fn().mockImplementation(async () => {
      await delay(1000);
      return Promise.resolve({
        json: () => mockShow,
      });
    });
    await act(async () => {
      render(<MockDetailsPage />);
    });
    const spinnerElement = screen.getByTestId('spinner');
    expect(spinnerElement).toBeInTheDocument();
  });
});
