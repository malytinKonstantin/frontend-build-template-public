import { createSelectorCreator, defaultMemoize } from 'reselect'
import { is } from 'immutable'

export const createImmutableSelector = createSelectorCreator(defaultMemoize, is)
