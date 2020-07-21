import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import { CountryContainer } from './CountryContainer';

const mockData = {
  name: 'mockName',
  valueForConfirmed: 123,
  valueForRecovered: 123,
  valueForDeaths: 123,
  valueForNewCases: 123,
  type: 'country',
  avatarLink: 'mock link',
};
test('CountryContainer renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <CountryContainer {...mockData} />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
