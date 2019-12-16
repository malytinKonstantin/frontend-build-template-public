import { fork, all } from 'redux-saga/effects'
import { combineReducers } from 'redux'

import notifications, { notificationSaga } from './ducks/notifications'

export const rootReducer = combineReducers({
  notifications,
})

export function* rootSaga() {
  yield all([fork(notificationSaga)])
}
