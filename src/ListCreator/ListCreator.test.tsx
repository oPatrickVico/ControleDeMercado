import { beforeEach, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import App from '../App';

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/newList']}>
      <App />
    </MemoryRouter>
  );
});

describe('ListCreator', () => {
  const user = userEvent.setup();

  it('loads', () => {
    expect(
      screen.getByRole('heading', { name: /Criar uma nova lista:/i })
    ).toBeDefined();
    expect(screen.getByLabelText(/Nome:/i)).toBeDefined();
    expect(screen.getByLabelText(/Qtd:/i)).toBeDefined();
    expect(screen.getByLabelText(/Uni:/i)).toBeDefined();
    expect(screen.getByRole('button', { name: 'submit' })).toBeDefined();
  });

  it('adds new entry', async () => {
    const newEntry = ['Banana', '3', 'unidades'];

    user.type(screen.getByLabelText(/Nome/), newEntry[0]);
    user.type(screen.getByLabelText(/Qtd/), newEntry[0]);
    user.type(screen.getByLabelText(/Uni/), newEntry[0]);

    await user.click(screen.getByRole('button', { name: /submit/ }));

    expect(screen.getByText(/Banana/)).toBeVisible();
    expect(screen.getByText(/3/)).toBeVisible();
    expect(screen.getByText(/unidades/)).toBeVisible();
  });
});
