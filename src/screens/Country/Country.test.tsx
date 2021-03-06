import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { RouterContextProvider } from '../../RouterContextProvider';
import Country from './Country';

test('Country renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <RouterContextProvider>
        <Country />
      </RouterContextProvider>
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
