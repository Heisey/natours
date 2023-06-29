
import Styled from 'styled-components/macro'

import * as LoginButton from 'components/abstract/Buttons/Login'
import * as ProfileButton from 'components/abstract/Buttons/Profile'

export const Header = Styled.header`
  width: 100%;
  background-color: ${props => props.theme.background.dark};
  height: 10rem;
  position: relative;
  display: flex;
  align-items: center;

  .logo {
    height: 4rem;
    width: auto;
    margin-left: 6rem;
    cursor: pointer;
  }

  .nav {
    position: absolute;
    right: 6rem;
    top: 2rem;
    z-index: 1000;
  }

  ${LoginButton.className} {
    position: absolute;
    top: 3rem;
    right: 18rem;
  }

  ${ProfileButton.className} {
    position: absolute;
    top: 2.5rem;
    right: 18rem;
  }
`