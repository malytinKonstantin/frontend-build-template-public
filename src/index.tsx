import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ApolloProvider } from 'react-apollo'
import { Provider as ReduxProvider } from 'react-redux'
import { ConnectedRouter as RouterProvider } from 'connected-react-router/immutable'
import configureStore, { history } from '~/store/configure-store'
import App from '~/ui/app'
import ErrorBoundary from '~/ui/components/error-boundary'
import { client } from '~/graphql'

import 'antd/dist/antd.less'

const store = configureStore()

const wrappedApp = (
  <ApolloProvider client={client}>
    <ReduxProvider store={store}>
      <RouterProvider history={history}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </RouterProvider>
    </ReduxProvider>
  </ApolloProvider>
)

ReactDOM.render(wrappedApp, document.getElementById('root'))
