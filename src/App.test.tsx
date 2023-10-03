import { beforeEach, describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import App from './App';
import { MemoryRouter } from 'react-router-dom';

beforeEach(() => {
  render(<App />, { wrapper: MemoryRouter });
});

describe('Integration Tests', () => {
  const user = userEvent.setup();

  test('Creates and saves a new list on <ListEditor> and display its name on <ListManager>', async () => {
    const editorLink = screen.getByRole('link', { name: /nova lista/i });
    await user.click(editorLink);

    const newEntry = ['Banana', '3', 'unidades'];
    await user.type(screen.getByLabelText(/Nome/i), newEntry[0]);
    await user.type(screen.getByLabelText(/Qtd/i), newEntry[1]);
    await user.type(screen.getByLabelText(/Unid/i), newEntry[2]);
    await user.click(screen.getByRole('button', { name: /submit/ }));

    // I don't know why user.type doesn't work as it should!!
    (screen.getByLabelText(/data de compra/i) as HTMLInputElement).value =
      '2023-12-25';

    const saveButton = screen.getByRole('button', { name: /salvar lista/i });
    await user.click(saveButton);

    const managerLink = screen.getByRole('link', { name: /todas as listas/i });
    await user.click(managerLink);

    expect(
      screen.getByRole('cell', { name: /nova lista/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('cell', {
        name: new Date('2023-12-25').toLocaleDateString('pt-BR'),
      })
    ).toBeInTheDocument();
  });
});
