import { all, fork } from 'redux-saga/effects'
import { showNotificationWatcher } from './showNotification'

export default function* notificationRootSaga() {
  yield all([fork(showNotificationWatcher)])
}
