import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import CountriesNewCases from './CountriesNewCases';

test('CountriesNewCases renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <CountriesNewCases />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
