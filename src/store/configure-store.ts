import { applyMiddleware, createStore, compose, Store } from 'redux'
import { routerMiddleware } from 'connected-react-router/immutable'
import { rootReducer, rootSaga } from './root'
import immutable from 'immutable'

import { createHashHistory } from 'history'
import createSagaMiddleware from 'redux-saga'

export const history = createHashHistory({
  hashType: 'slash',
})

/* eslint-disable */
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: (args: any) => any
    store: Store
  }
}
const sagaMiddleware = createSagaMiddleware()

const composeEnhancers =
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ !== 'undefined'
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ serialize: { immutable } })
    : compose

export default function configureStore(): Store {
  const middlewares = [routerMiddleware(history), sagaMiddleware]

  const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middlewares))(
    createStore,
  )

  const store = createStoreWithMiddleware(rootReducer(history))

  sagaMiddleware.run(rootSaga)

  return store
}
/* eslint-enable */
