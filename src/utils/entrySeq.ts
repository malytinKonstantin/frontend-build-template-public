import { Map } from 'immutable'

/**
 *  функция преобразует структуры Immutable.Map в массив
 */
export function entrySeq<T>(map: Map<string, T>): T[] {
  const list = map.entrySeq().map(([, val]) => val)
  return list.toJS()
}
