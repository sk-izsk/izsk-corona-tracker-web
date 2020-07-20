import { lazy } from 'react';

const HomeScreen = lazy(() => import('../src/screens/Home/Home'));
const AboutScreen = lazy(() => import('../src/screens/About/About'));
const CountriesScreen = lazy(() => import('../src/screens/Countries/Countries'));
const CountriesRecoveredScreen = lazy(() => import('../src/screens/CountriesRecovered/CountriesRecovered'));

export { HomeScreen, AboutScreen, CountriesScreen, CountriesRecoveredScreen };
