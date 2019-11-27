import React from 'react'
import NavListItem, { NavListItemProps } from './nav-list-item'
import { Wrapper } from './nav-list-styles'

interface NavListProps {
  list: NavListItemProps[]
}

export default function NavList(props: NavListProps) {
  const { list } = props
  return <Wrapper>{list.map(NavListItem)}</Wrapper>
}
