type Permission = string[]

type Route = {
  id: string
  path: string
  label: string | JSX.Element
  loader: () => Promise<{ default: import('react').ComponentType<any> }>
  exact?: boolean
  routes?: Route[]
  private?: Permission
}
