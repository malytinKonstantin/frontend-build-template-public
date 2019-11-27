import { createImmutableSelector } from '~/store/utils'

export const getRouter = createImmutableSelector(
  (state: IMap) => state.get('router'),
  router => router.toJS(),
)
