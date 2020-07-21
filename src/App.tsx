import React, { FC, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import { LoadingScreen, NavBar } from './components';
import {
  AboutScreen,
  CountriesDeathsScreen,
  CountriesRecoveredScreen,
  CountriesScreen,
  CountryConfirmedScreen,
  CountryScreen,
  HomeScreen,
} from './LazyComponents';

const App: FC = () => {
  return (
    <AppProvider>
      <NavBar />
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact component={HomeScreen} />
          <Route path='/about' exact component={AboutScreen} />
          <Route path='/countries' exact component={CountriesScreen} />
          <Route path='/confirmed' exact component={CountryConfirmedScreen} />
          <Route path='/recovered' exact component={CountriesRecoveredScreen} />
          <Route path='/deaths' exact component={CountriesDeathsScreen} />
          <Route path='/country/:country/:confirmed/:recovered/:deaths' exact component={CountryScreen} />
        </Suspense>
      </Switch>
    </AppProvider>
  );
};

export default App;
