
import Styled from 'styled-components/macro'

import * as Icon from 'components/common/Images/Icon'
import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

export const Card = Styled.div`
  position: relative;
  z-index: 70;
  background-color: ${props => props.theme.background.light}95;
  text-align: center;

  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem ${props => props.theme.background.dark}80;
  padding: 2rem;
  transition: all 0.3s ease-in;

  ${Icon.className} {
    margin-bottom: 0.5rem;
    fill: ${props => props.theme.background.primary};
  }

  ${Heading.className} {
    margin-bottom: 2rem;
    font-size: 1.6rem;
  }

  ${Text.ClassName} {
    font-size: 1.5rem
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.05);
  }
`