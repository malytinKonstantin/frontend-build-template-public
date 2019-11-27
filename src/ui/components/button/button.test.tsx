import React from 'react'
import Button from './button'
import renderer from 'react-test-renderer'

it('button renders correctly', () => {
  const tree = renderer.create(<Button type="primary">Facebook</Button>).toJSON()
  expect(tree).toMatchSnapshot()
})
