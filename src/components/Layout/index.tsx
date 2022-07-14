import * as React from 'react'
import { FCC } from '~types/react'
import { Wrapper } from './index.styles'

const Layout: FCC = (props) => {
  const { children } = props
  return <Wrapper>{children}</Wrapper>
}

export default React.memo(Layout)
