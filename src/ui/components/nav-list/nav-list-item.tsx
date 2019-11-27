import React from 'react'
import { Link } from 'react-router-dom'

export interface NavListItemProps {
  id: string
  component: string | JSX.Element
  to: string
}

export default function NavListItem(props: NavListItemProps) {
  const { to, component, id } = props
  return (
    <div key={id}>
      <Link to={to}>{component}</Link>
    </div>
  )
}
