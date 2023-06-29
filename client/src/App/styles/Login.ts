
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'

export const Login = Styled(Button.Component)`
  position: fixed;
  top: 5rem;
  right: 18rem;
  z-index: 1000;
  background-color: white;
  color: ${props => props.theme.background.primary};

  &:hover {
    color: white;
  }
`