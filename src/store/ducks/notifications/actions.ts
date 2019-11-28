import { createActions } from 'redux-actions'

export const { showNotification, readNotification } = createActions(
  'SHOW_NOTIFICATION',
  'READ_NOTIFICATION',
)
