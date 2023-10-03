import { describe, expect, it } from 'vitest';

import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import '@testing-library/jest-dom';

import ListManager from './ListManager';

describe('ListManager', () => {
  render(<ListManager setShoppingLists={() => {}} shoppingLists={[]} />);

  it('loads', () => {
    expect(
      screen.getByRole('heading', { name: 'Listas de Compra' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /Nome/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('columnheader', { name: /Data/i })
    ).toBeInTheDocument();
  });
});
