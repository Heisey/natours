
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'

export const Feature = Styled.section`

  position: relative;
  padding: 20rem 0;

  
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${Images.hero});

  z-index: 50;
  width: 100%;

  transform: skewY(-7deg);

  margin-top: -12.5rem;
`