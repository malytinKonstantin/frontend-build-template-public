import { handleActions } from 'redux-actions'
import { showNotification, readNotification } from './actions'
import { fromJS } from 'immutable'
import uuid from 'uuid/v4'

const initialState: NotificationHashMap = {}
const immutableInitialState = fromJS(initialState)

const notifications = handleActions(
  {
    [showNotification.toString()]: (state, { payload }) => {
      const id = uuid()
      const order = state.size
      const date = new Date()
      const isReaded = false
      const notification = fromJS({ ...payload, date, order, isReaded })

      return state.set(id, notification)
    },

    [readNotification.toString()]: state =>
      state.map(n => (n.get('isReaded') ? n : n.set('isReaded', true))),
  },
  immutableInitialState,
)

export default notifications
