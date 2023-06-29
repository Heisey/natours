
import * as React from 'react'
import * as Styled from 'styled-components'

import * as Core from 'core'

import * as _M from './Props'

const ThemeProvider: React.FC<_M.Props> = (props) => {
  
  return (
    <Styled.ThemeProvider theme={Core.config.defaultTheme}>
      {props.children}
    </Styled.ThemeProvider>
  )
}

export const Component = ThemeProvider