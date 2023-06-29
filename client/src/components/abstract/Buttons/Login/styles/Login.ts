
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'

export const Login = Styled(Button.Component)`
  background-color: white;
  color: ${props => props.theme.background.primary};

  &:hover {
    color: white;
  }
`