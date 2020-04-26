import React from 'react';
import { render } from '@testing-library/react';
import Vida from './Vida';

test('renders learn react link', () => {
  const { getByText } = render(<Vida/>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
