
import Styled from 'styled-components/macro'

import * as Heading from 'components/common/Typography/Heading'

export const Title = Styled(Heading.Component)`
  font-size: 3.5rem;
  text-transform: uppercase;
  background-image: linear-gradient(
    to right,
    ${props => props.theme.background.linearLight},
    ${props => props.theme.background.linearDark}
  );
  display: inline-block;
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  transition: all 0.3s ease-in;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem ${props => props.theme.text.dark}80;
  }
`