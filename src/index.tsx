import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider as ReduxProvider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from '~/store/configure-store'
import App from '~/ui/app'
import ErrorBoundary from '~/ui/components/error-boundary'
import { client } from '~/graphql'

const store = configureStore()

const wrappedApp = (
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <Router>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Router>
    </ReduxProvider>
  </ApolloProvider>
)

ReactDOM.render(wrappedApp, document.getElementById('root'))
