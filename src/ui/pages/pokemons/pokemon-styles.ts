import styled from 'styled-components'
import { Select as AntdSelect } from 'antd'

export const PageTitle = styled.h1`
  font-size: 22px;
  text-align: center;
  margin-bottom: 40px;
`

export const Select = styled(AntdSelect)`
  width: 200px;
  margin: 0 auto 50px !important;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 35px;
`

export const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-bottom: 15px;

  & img {
    margin-top: auto;
    max-height: 100%;
    height: auto;
    margin-bottom: 15px;
  }
`

export const Title = styled.div`
  text-align: center;
`
