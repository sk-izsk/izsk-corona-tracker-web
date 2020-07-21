import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import Countries from './Countries';

test('Countries renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Countries />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
