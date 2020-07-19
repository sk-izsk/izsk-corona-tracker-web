import React, { FC, lazy, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import { LoadingScreen } from './components';

const HomeScreen = lazy(() => import('../src/screens/Home/Home'));

const App: FC = () => {
  return (
    <AppProvider>
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact component={HomeScreen} />
        </Suspense>
      </Switch>
    </AppProvider>
  );
};

export default App;
