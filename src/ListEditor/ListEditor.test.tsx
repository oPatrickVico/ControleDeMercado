import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ListEditor from './ListEditor';


describe('ListEditor', () => {
  const user = userEvent.setup();

  it('loads with proper title', () => {
    const title = 'Test List';
    render(<ListEditor listTitle={title} />);

    expect(
      screen.getByRole('heading', { name: /Criar uma nova lista:/i })
    ).toBeDefined();
    expect(screen.getByDisplayValue(title)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Qtd/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Unid/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'submit' })).toBeInTheDocument();
  });

  it('adds new entry', async () => {
    render(<ListEditor initialEntries={[]} />);
    const newEntry = ['Banana', '3', 'unidades'];

    await user.type(screen.getByLabelText(/Nome/i), newEntry[0]);
    await user.type(screen.getByLabelText(/Qtd/i), newEntry[1]);
    await user.type(screen.getByLabelText(/Unid/i), newEntry[2]);

    await user.click(screen.getByRole('button', { name: /submit/ }));

    expect(screen.getByText(newEntry[0])).toBeInTheDocument();
    expect(screen.getByText(newEntry[1])).toBeInTheDocument();
    expect(screen.getByText(newEntry[2])).toBeInTheDocument();
  });

  it('deletes a lone entry', async () => {
    const entry = {
      entryName: 'Banana',
      quantity: '3',
      units: 'unidades',
    };
    render(<ListEditor initialEntries={[entry]} />);

    expect(screen.getByText(entry.entryName)).toBeInTheDocument();
    expect(screen.getByText(entry.quantity)).toBeInTheDocument();
    expect(screen.getByText(entry.units)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /excluir Banana/ }));

    expect(screen.queryByText(entry.entryName)).not.toBeInTheDocument();
    expect(screen.queryByText(entry.quantity)).not.toBeInTheDocument();
    expect(screen.queryByText(entry.units)).not.toBeInTheDocument();
  });

  it('deletes an entry in the middle', async () => {
    const entries = [
      {
        entryName: 'Banana',
        quantity: '3',
        units: 'unidades',
      },
      {
        entryName: 'Morango',
        quantity: '3',
        units: 'unidades',
      },
      {
        entryName: 'Leite',
        quantity: '5',
        units: 'litros',
      },
    ];

    render(<ListEditor initialEntries={entries} />);

    expect(screen.getByText(entries[0].entryName)).toBeInTheDocument();
    expect(screen.getByText(entries[1].entryName)).toBeInTheDocument();
    expect(screen.getByText(entries[2].entryName)).toBeInTheDocument();

    // The row number is index + 1, due to more understable row numbering for accessibility stuff
    await user.click(screen.getByRole('button', { name: /excluir Morango/ }));

    expect(screen.queryByText(entries[0].entryName)).toBeInTheDocument();
    expect(screen.queryByText(entries[1].entryName)).not.toBeInTheDocument();
    expect(screen.queryByText(entries[2].entryName)).toBeInTheDocument();
  });
});
