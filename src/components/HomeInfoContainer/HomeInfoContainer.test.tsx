import { render } from '@testing-library/react';
import React from 'react';
import { HomeInfoContainer } from '..';

const mockData = {
  name: 'mock name',
  value: 123,
};

test('HomeInfoContainer renders correctly', () => {
  const { asFragment } = render(<HomeInfoContainer {...mockData} />);
  expect(asFragment()).toMatchSnapshot();
});
