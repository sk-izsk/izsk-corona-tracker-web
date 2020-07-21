import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import { RouterContextProvider } from '../../RouterContextProvider';
import { CountryListContainer } from './CountryListContainer';

const mockData = {
  type: 'Confirmed',
  countryList: [
    {
      name: 'mockName',
      valueForConfirmed: 123,
      valueForRecovered: 123,
      valueForDeaths: 123,
      valueForNewCases: 123,
      type: 'country',
      avatarLink: 'mock link',
    },
  ],
};
test('CountryListContainer renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <RouterContextProvider>
        <CountryListContainer {...mockData} />
      </RouterContextProvider>
      ,
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
