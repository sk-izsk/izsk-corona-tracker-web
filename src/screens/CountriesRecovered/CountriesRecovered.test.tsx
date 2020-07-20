import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import CountriesRecovered from './CountriesRecovered';

test('CountriesRecovered renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <CountriesRecovered />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
