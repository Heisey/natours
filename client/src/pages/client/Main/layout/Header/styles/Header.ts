
import styled from 'styled-components/macro'

import * as Images from 'assets/images'

export const Header = styled.header`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
  background-image: url(${Images.hero});

  height: 95vh;

  position: relative;

  clip-path: polygon(
    0 0,
    100% 0,
    100% 75vh,
    0 100%
  );

  display: flex;

  justify-content: center;
  align-items: center;
`