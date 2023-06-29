
import  Styled from 'styled-components/macro'

import * as LoginButton from 'components/abstract/Buttons/Login'
import * as ProfileButton from 'components/abstract/Buttons/Profile'
import * as NavButton from 'components/common/Buttons/Nav'

export const Header = Styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  ${LoginButton.className} {
    position: absolute;
    top: 5rem;
    right: 18rem;
    z-index: 1000;
  }

  ${NavButton.className} {
    position: absolute;
    right: 6rem;
    top: 4rem;
    z-index: 1000;
  }

  ${ProfileButton.className} {
    position: absolute;
    top: 5rem;
    right: 18rem;
    z-index: 10;
  }
`