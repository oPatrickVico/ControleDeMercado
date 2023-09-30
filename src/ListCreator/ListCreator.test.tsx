import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('ListCreator', () => {
  render(
    <MemoryRouter initialEntries={['/newList']}>
      <App />
    </MemoryRouter>
  );

  it('loads', () => {
    expect(
      screen.getByRole('heading', { name: /Criar uma nova lista:/i })
    ).toBeDefined();
    expect(screen.getByLabelText(/Nome:/i)).toBeDefined();
    expect(screen.getByLabelText(/Qtd:/i)).toBeDefined();
    expect(screen.getByLabelText(/Uni:/i)).toBeDefined();
    expect(screen.getByRole('button', { name: 'submit' })).toBeDefined();
  });
});
