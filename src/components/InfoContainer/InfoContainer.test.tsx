import { render } from '@testing-library/react';
import React from 'react';
import { RouterContextProvider } from '../../RouterContextProvider';
import { InfoContainer } from './InfoContainer';

const mockData = {
  information: [
    {
      name: 'mockName',
      value: 123,
      to: '/mockRoute',
    },
  ],
  lastUpdate: '2020-07-20T14:35:04.000Z',
  countryName: 'mock country',
};

test('InfoContainer renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <InfoContainer {...mockData} />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
