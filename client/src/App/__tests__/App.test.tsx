import React from 'react';
import { render, screen } from '@testing-library/react';
import * as App from '..';

test('renders learn react link', () => {
  render(<App.Component />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
