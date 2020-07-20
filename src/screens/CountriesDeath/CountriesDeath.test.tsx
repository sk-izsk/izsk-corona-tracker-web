import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import CountriesDeath from './CountriesDeath';

test('CountriesDeath renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <CountriesDeath />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
