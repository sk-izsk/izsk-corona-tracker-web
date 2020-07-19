import React, { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import { LoadingScreen, NavBar } from './components';

const HomeScreen = lazy(() => import('../src/screens/Home/Home'));
const AboutScreen = lazy(() => import('../src//screens/About/About'));

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
        </Suspense>
      </Switch>
    </AppProvider>
  );
};

export default App;
