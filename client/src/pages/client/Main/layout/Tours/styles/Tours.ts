
import Styled from 'styled-components/macro'

import * as AnimatedButton from 'components/common/Buttons/Animated'

export const Tours = Styled.section`
  background-color: ${props => props.theme.background.grey};
  padding: 25rem 0 10rem 0;
  margin-top: -12.5vh;

  ${AnimatedButton.className} {
    margin: 0 auto;
    margin-top: 10rem;
  }
`
