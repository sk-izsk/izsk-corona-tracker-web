import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import CountriesConfirmed from './CountriesConfirmed';

test('CountriesConfirmed renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <CountriesConfirmed />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
