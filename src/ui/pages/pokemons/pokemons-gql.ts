import gql from 'graphql-tag'

export const PokemonFragment = gql`
  fragment pokemonInfo on Pokemon {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    maxHP
    image
  }
`

export const POKEMONS_QUERY = gql`
  query($first: Int!) {
    pokemons(first: $first) {
      ...pokemonInfo
    }
  }
  ${PokemonFragment}
`
