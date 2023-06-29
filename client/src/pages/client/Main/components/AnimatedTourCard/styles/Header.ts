
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'


export const Header = Styled.div`
  background-image: 
    linear-gradient(
      to right,
      ${props => props.theme.snow.light},
      ${props => props.theme.snow.dark}
    ),
    url(${Images.nat5});
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