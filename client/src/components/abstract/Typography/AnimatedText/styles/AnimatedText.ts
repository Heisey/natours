
import Styled from 'styled-components/macro'

import * as Text from 'components/common/Typography/Text'

export const AnimatedText = Styled(Text.Component)`
  box-shadow: 0 1rem 2rem ${props => props.theme.background.dark}50;
  color: ${props => props.theme.text.light};
  font-size: 1.6rem;
  transition: all 0.3s ease-in;
  display: inline-block;

  &:hover {
    transform: rotate(5deg) scale(1.3);
    color: ${props => props.theme.background.primary};
  }
`