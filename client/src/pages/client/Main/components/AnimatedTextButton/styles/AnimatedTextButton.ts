
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'

import { Arrow } from './Arrow'

export const AnimatedTextButton = Styled(Button.Component)`
  white-space: nowrap;
  transition: all 0.3s ease-in;
  position: relative;
  overflow: visible;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: -3rem;
    height: 100%;
    width: 3rem;
    background-color: transparent;
    transition: all 0.3s ease-in;
  }

  &:hover {
    ${Arrow} {
      right: -2rem;
      fill: ${props => props.theme.text.light};
    }

    &:before {
      background-color: ${props => props.theme.background.primary}
    }
  }
`