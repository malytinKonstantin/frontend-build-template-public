import { fork, all } from 'redux-saga/effects'
import { combineReducers } from 'redux-immutable'
import { connectRouter } from 'connected-react-router/immutable'

import notifications, { notificationSaga } from './ducks/notifications'

export const rootReducer = history =>
  combineReducers({
    notifications,
    router: connectRouter(history),
  })

export function* rootSaga() {
  yield all([fork(notificationSaga)])
}
