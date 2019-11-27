import styled from 'styled-components'
import { Spin as AntdSpin } from 'antd'

export const AppWrapper = styled.div`
  min-height: 100vh;
  position: relative;
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
`

export const Spin = styled(AntdSpin)`
  position: absolute !important;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`
