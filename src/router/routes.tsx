import uuid from 'uuid/v4'

export const routes: Route[] = [
  {
    id: uuid(),
    path: '/',
    label: 'Главная страница',
    loader: () => import('~/ui/pages/pokemons'),
  },
]
