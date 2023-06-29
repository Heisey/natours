
import Styled from 'styled-components/macro'

import * as Core from 'core'

interface Props {
  active: boolean
}

const buttonBackgroundStyles = (args: Props, theme: Core.Models.Theme) => {
  if (args.active) return `${theme.background.light}`
  return 'transparent'
}

export const MenuItem = Styled.li<Props>`

  list-style: none;

  & > button {
    background-color: ${props => buttonBackgroundStyles(props, props.theme)};
    transition: all 0.3s ease-in;
    padding: 1rem 0;
    width: 100%;
    border: none;

    :hover {
      background-color: ${props => props.theme.background.light};
    }
  }
`