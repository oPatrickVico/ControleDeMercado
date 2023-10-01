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

const labels = {
  entryName: /Nome/i,
  quantity: /Qtd/i,
  units: /Uni/i,
};

describe('ListCreator', () => {
  const user = userEvent.setup();

  it('loads', () => {
    expect(
      screen.getByRole('heading', { name: /Criar uma nova lista:/i })
    ).toBeDefined();
    expect(screen.getByLabelText(labels.entryName)).toBeDefined();
    expect(screen.getByLabelText(labels.quantity)).toBeDefined();
    expect(screen.getByLabelText(labels.units)).toBeDefined();
    expect(screen.getByRole('button', { name: 'submit' })).toBeDefined();
  });

  it('adds new entry', async () => {
    const newEntry = ['Banana', '3', 'unidades'];

    await user.type(screen.getByLabelText(labels.entryName), newEntry[0]);
    await user.type(screen.getByLabelText(labels.quantity), newEntry[1]);
    await user.type(screen.getByLabelText(labels.units), newEntry[2]);

    await user.click(screen.getByRole('button', { name: /submit/ }));

    expect(screen.getByText(newEntry[0])).toBeDefined();
    expect(screen.getByText(newEntry[1])).toBeDefined();
    expect(screen.getByText(newEntry[2])).toBeDefined();
  });

  it('deletes present entry', async () => {
    const newEntry = ['Banana', '3', 'unidades'];

    await user.type(screen.getByLabelText(labels.entryName), newEntry[0]);
    await user.type(screen.getByLabelText(labels.quantity), newEntry[1]);
    await user.type(screen.getByLabelText(labels.units), newEntry[2]);

    await user.click(screen.getByRole('button', { name: /submit/ }));

    expect(screen.getByText(newEntry[0])).toBeDefined();
    expect(screen.getByText(newEntry[1])).toBeDefined();
    expect(screen.getByText(newEntry[2])).toBeDefined();

    await user.click(screen.getByRole('button', { name: /delete row 1/ }));

    expect(screen.getByText(newEntry[0])).toBeUndefined();
    expect(screen.getByText(newEntry[1])).toBeUndefined();
    expect(screen.getByText(newEntry[2])).toBeUndefined();
  });
});
