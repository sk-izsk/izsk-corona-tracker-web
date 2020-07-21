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
  countryName: 'mock country',
  avatarLink: 'mock link',
  type: 'country',
};

test('InfoContainer renders correctly', () => {
  const { asFragment } = render(
    <RouterContextProvider>
      <InfoContainer {...mockData} />
    </RouterContextProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
