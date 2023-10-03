import { beforeEach, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import App from '../App';

beforeEach(() => {
  render(<App />, { wrapper: MemoryRouter });
});

describe('Dashboard', () => {
  const user = userEvent.setup();

  it('routes to /list-editor', async () => {
    const link = screen.getByRole('link', { name: /Nova lista/i });

    await user.click(link);

    expect(
      screen.getByRole('heading', { name: /Criar uma nova lista:/i })
    ).toBeInTheDocument();
  });

  it('routes to /list-manager', async () => {
    const link = screen.getByRole('link', { name: /Todas as listas/i });

    await user.click(link);

    expect(screen.getByRole('heading', { name: /Listas de Compra/i }));
  });
});
