
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'

interface Props {
  img: string
}

export const Header = Styled.div<Props>`
  position: relative;
  height: 60vh;

  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${props => Images[props.img as keyof typeof Images]});

  clip-path: polygon(
    0 0,
    100% 0,
    100% 85%,
    0 100%
  );

`