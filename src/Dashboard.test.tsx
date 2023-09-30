import { beforeEach, describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => {
  render(<App />, { wrapper: MemoryRouter });
});

describe('Dashboard', () => {
  const user = userEvent.setup();

  it('routes to /newList', async () => {
    const link = screen.getByText(/Nova lista/i);

    await user.click(link);

    expect(screen.getByText(/Criar uma nova lista:/i)).toBeInTheDocument();
  });
});
