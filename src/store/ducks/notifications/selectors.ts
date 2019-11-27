import { createImmutableSelector } from '~/store/utils'
import { entrySeq } from '~/utils'

export const getNotifications = createImmutableSelector(
  (state: IMap) => state.get('notifications'),
  substate => substate,
)

export const getNotificationsCount = createImmutableSelector(
  (state: IMap) => entrySeq(getNotifications(state)),
  substate => substate.filter(n => !n.isReaded).length,
)
