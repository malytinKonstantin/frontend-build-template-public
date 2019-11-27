import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Loadable from 'react-loadable'
import { routes } from '~/router'
import Nav from '~/ui/components/nav-list'
import { Container, AppWrapper, Spin } from './app-styles'

export default class App extends Component {
  public get renderRoutes(): React.ReactNode[] {
    return routes.map(route => {
      const asyncComponent = Loadable({
        loader: route.loader,
        loading: () => <Spin />,
      })

      const path = typeof route.path === 'string' ? route.path : route.path.join('')

      return (
        <Route
          path={path}
          exact={route.exact}
          component={asyncComponent}
          key={route.id}
        />
      )
    })
  }

  public render(): React.ReactNode {
    const navList = routes.map(({ id, path, label }) => ({
      id,
      to: path,
      component: label,
    }))

    return (
      <AppWrapper>
        <Container>
          <Nav list={navList} />
          <Switch>{this.renderRoutes}</Switch>
        </Container>
      </AppWrapper>
    )
  }
}
