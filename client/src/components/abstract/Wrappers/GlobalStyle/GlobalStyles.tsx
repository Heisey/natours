
import * as styled from 'styled-components'

import * as Core from 'core'

interface GlobalStyleAttr {
  theme: Core.Models.Theme
}

const GlobalStyle = styled.createGlobalStyle<GlobalStyleAttr>`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%;
  }

  body {
    line-height: 1.7;
    background-color: ${props => props.theme.background.light};
    color: ${props => props.theme.text.dark};
    padding: 3rem;
  }
`

export const Component = GlobalStyle