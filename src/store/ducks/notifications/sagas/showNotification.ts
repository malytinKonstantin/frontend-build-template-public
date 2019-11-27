import { take } from 'redux-saga/effects'
import { showNotification } from '../actions'
import { notification } from 'antd'

export function* showNotificationWatcher() {
  while (true) {
    const {
      payload: { type = 'info', message, description },
    } = yield take(showNotification.toString())

    notification[type]({ message, description })
  }
}
