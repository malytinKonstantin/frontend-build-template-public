import React, { useEffect } from 'react'
import { useQuery } from 'react-apollo'
import { POKEMONS_QUERY } from './pokemons-gql'
import { Alert } from 'antd'
import { RouteChildrenProps } from 'react-router'
import qs from 'query-string'
import { Spin } from '~/ui/app/app-styles'

import Main from './pokemons'

export default function PokemonsContainer(props: RouteChildrenProps) {
  const { history, location } = props

  const defaultPokemonsCount = 10

  useEffect(() => {
    history.push(`?pokemonsCount=${defaultPokemonsCount}`)
  }, [])

  const { pokemonsCount } = qs.parse(location.search)

  const { loading, error, data } = useQuery(POKEMONS_QUERY, {
    variables: { first: pokemonsCount || defaultPokemonsCount },
  })

  if (error) return <Alert type="error" message={error.message} />

  if (loading) return <Spin size="large" tip="Загрузка..." />

  return <Main data={data} {...props} />
}
