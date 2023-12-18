// Create store with dynamic reducers
import { configureStore } from '@reduxjs/toolkit';
import { createInjectorsEnhancer } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { createReducer } from './reducers';

export const configureAppStore = () => {
  const reduxSagaOptions = {};
  const sagaMiddleware = createSagaMiddleware(reduxSagaOptions);
  const { run: runSaga } = sagaMiddleware;

  const enhancers = [
    createInjectorsEnhancer({
      createReducer,
      runSaga,
    }),
  ];

  const store = configureStore({
    reducer: createReducer(),
    middleware: getDefaultMiddleware => [
      ...getDefaultMiddleware(),
      sagaMiddleware,
    ],
    devTools: process.env.NODE_ENV !== 'production',
    enhancers,
  });

  return store;
};
