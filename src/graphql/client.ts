import ApolloClient from 'apollo-boost'

const APP_ENDPOINT = 'https://graphql-pokemon.now.sh'

export const client = new ApolloClient({
  uri: APP_ENDPOINT,
})
