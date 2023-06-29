
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'
import * as Server_Tours from 'server/Tours'
import * as Utils_Styles from 'utils/Styles'

interface Props {
  environment: Server_Tours.Models.Environment
  img: string
}

export const Header = Styled.div<Props>`
  background-image: 
    linear-gradient(
      to right,
      ${props => Utils_Styles.generateLinearColor({ ...props, variant: 'light' })},
      ${props => Utils_Styles.generateLinearColor({ ...props, variant: 'dark' })}
    ),
    url(${props => Images[props.img as keyof typeof Images]});
  background-blend-mode: screen;
  background-size: cover;
  height: 23rem;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 85%,
    0 100%
  );
  position: relative;
`