import { lazy } from 'react';

const HomeScreen = lazy(() => import('../src/screens/Home/Home'));
const AboutScreen = lazy(() => import('../src/screens/About/About'));
const CountriesScreen = lazy(() => import('../src/screens/Countries/Countries'));
const CountriesRecoveredScreen = lazy(() => import('../src/screens/CountriesRecovered/CountriesRecovered'));
const CountriesDeathsScreen = lazy(() => import('../src/screens/CountriesDeath/CountriesDeath'));
const CountryScreen = lazy(() => import('../src/screens/Country/Country'));
const CountryConfirmedScreen = lazy(() => import('../src/screens/CountriesConfirmed/CountriesConfirmed'));

export {
  HomeScreen,
  AboutScreen,
  CountriesScreen,
  CountriesRecoveredScreen,
  CountriesDeathsScreen,
  CountryScreen,
  CountryConfirmedScreen,
};
