import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  devTools: {
    name: 'covidTracker',
  },
});

export type RootState = ReturnType<typeof rootReducer>;
export { store };
