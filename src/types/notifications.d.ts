// оповещения

type NotificationItemTypes = 'success' | 'info' | 'warning' | 'error'

type NotificationItem = {
  id: string
  type: NotificationItemTypes
  message: string
  description: string
  date?: Date
  order?: number
  isReaded?: boolean
}

type NotificationMap = import('immutable').Map<string, NotificationItem>

type NotificationHashMap = { [key: string]: NotificationItem }
