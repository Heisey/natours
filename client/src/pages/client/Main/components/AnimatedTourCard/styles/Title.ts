
import Styled from 'styled-components/macro'

import * as Heading from 'components/common/Typography/Heading'

export const Title = Styled(Heading.Component)`
  font-size: 2.8rem;
  text-transform: uppercase;
  position: absolute;
  top: 12rem;
  right: 2rem;
  text-align: right;
  color: ${props => props.theme.text.light};
  max-width: 65%;
  
  span {
    box-decoration-break: clone;
    padding: 1rem 1.5rem;
    background-image: linear-gradient(
      to right bottom,
      ${props => props.theme.snow.light}95,
      ${props => props.theme.snow.dark}95
    );
  }
`