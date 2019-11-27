import React from 'react'
import { PokemonInfoFragment } from '~/types/generated/graphql'
import { Row, Col, Select as AntdSelect } from 'antd'
import { RouteChildrenProps } from 'react-router'
import { PageTitle, Select, Wrapper, Title, ImageWrapper } from './pokemon-styles'
import qs from 'query-string'
interface Props extends RouteChildrenProps {
  data: {
    pokemons: PokemonInfoFragment[]
  }
}

const { Option } = AntdSelect

export default function Pokemons(props: Props) {
  const { history, location } = props

  const { pokemonsCount } = qs.parse(location.search)

  return (
    <>
      <PageTitle>pokemons page</PageTitle>
      <Row justify="start" type="flex">
        <Select
          placeholder="сколько покемонов"
          value={pokemonsCount}
          onSelect={value => {
            history.push(`?pokemonsCount=${value}`)
          }}
        >
          {[10, 20, 30, 40, 50].map(value => (
            <Option key={value} value={value}>
              {value}
            </Option>
          ))}
        </Select>
      </Row>
      <Row align="top" justify="start" type="flex">
        {props.data.pokemons.map(pokemon => (
          <Col span={6} key={pokemon.id}>
            <Wrapper>
              <ImageWrapper>
                <img src={pokemon.image!} alt="" />
              </ImageWrapper>
              <Title>{pokemon.name}</Title>
            </Wrapper>
          </Col>
        ))}
      </Row>
    </>
  )
}
