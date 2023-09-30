import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

  it('routes to /newList', () => {
    const link = screen.getByText(/Nova lista/i);

    link.click();

    expect(screen.getByText(/Criar uma nova lista/)).toBeDefined();
  });
});
