import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter } from 'react-router-dom';
import { beforeEach, describe, expect, it } from 'vitest';

const MockHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

describe('Header component', () => {
  describe('header component rendering', () => {
    it('renders logo as a link with correct text', () => {
      render(<MockHeader />);
      const logoElement = screen.getByText(/Shows/i);
      expect(logoElement).toBeInTheDocument();

      const logoLink = screen.getByRole('link');
      expect(logoLink).toBeInTheDocument();
    });

    it('renders search form with search input and submit button', () => {
      render(<MockHeader />);
      const FormElement = screen.getByTestId('search-form');
      expect(FormElement).toBeInTheDocument();
      expect(FormElement).toContainHTML('button');
      expect(FormElement).toContainHTML('input');
    });
  });

  describe('Search component', () => {
    beforeEach(() => {
      localStorage.clear();
    });

    it('should to be able to type in input', () => {
      render(<MockHeader />);
      const inputElement = screen.getByPlaceholderText(/Search show.../i) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: 'girl' } });
      expect(inputElement.value).toBe('girl');
    });

    it('saves input value in local storage', () => {
      render(<MockHeader />);
      const buttonElement = screen.getByRole('button') as HTMLButtonElement;
      const inputElement = screen.getByPlaceholderText(/Search show.../i) as HTMLInputElement;
      fireEvent.change(inputElement, { target: { value: 'girl' } });
      fireEvent.click(buttonElement);
      expect(localStorage.getItem('TVShowSearch')).toBe('girl');
    });

    it('retrieves the value from local storage upon mounting', () => {
      const initialValue = 'initialValue';
      localStorage.setItem('TVShowSearch', initialValue);
      render(<MockHeader />);
      const inputElement = screen.getByPlaceholderText(/Search show.../i) as HTMLInputElement;
      expect(inputElement.value).toBe(initialValue);
    });
  });
});
