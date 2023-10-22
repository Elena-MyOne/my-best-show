import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('Renders heading', () => {
    //Arrange
    render(<App />);
    //Act
    //Expect
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    );
  });
});
