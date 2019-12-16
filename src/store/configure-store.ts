import { applyMiddleware, createStore, compose, Store } from 'redux'
import { rootReducer, rootSaga } from './root'
import immutable from 'immutable'

import createSagaMiddleware from 'redux-saga'

/* eslint-disable */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any;
    store: Store;
  }
}

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: { immutable } })
    : compose;

export default function configureStore(): Store {
  const createStoreWithMiddleware = composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )(createStore);

  const store = createStoreWithMiddleware(rootReducer);

  sagaMiddleware.run(rootSaga);

  return store;
}
/* eslint-enable */
