import { schema, normalize } from 'normalizr'

type result<T> = {
  [key: string]: T
}

/** преобразует вложенные объекеты в плоский map */
export function flatNormalizer<T>(items: T[], idAttribute = 'id'): result<T> {
  const item = new schema.Entity('items', {}, { idAttribute })

  const result = normalize(items, [item])

  return result.entities.items || {}
}
