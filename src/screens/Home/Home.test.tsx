import { render } from '@testing-library/react';
import React from 'react';
import { AppProvider } from '../../AppProvider';
import Home from './Home';

test('Home renders correctly', () => {
  const { asFragment } = render(
    <AppProvider>
      <Home />
    </AppProvider>,
  );
  expect(asFragment()).toMatchSnapshot();
});
