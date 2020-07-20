import { render } from '@testing-library/react';
import React from 'react';
import { NavBar } from './NavBar';

test('NavBar renders correctly', () => {
  const { asFragment } = render(<NavBar />);
  expect(asFragment()).toMatchSnapshot();
});
