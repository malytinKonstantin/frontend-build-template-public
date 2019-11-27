import React from 'react'
import { Button } from 'antd'
import 'antd/dist/antd.less'

export default { title: 'Button' }

export const withText = () => <Button>Hello Button</Button>

export const PrimaryButton = () => (
  <Button size="large" type="primary">
    button text
  </Button>
)
