import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import Country from './Country';

test('Country renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <Country />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
