
import Styled from 'styled-components/macro'

import * as A_App from '../../../animations'

interface Props {
  isOpen: boolean
}

export const Nav = Styled.div<Props>`
  position: fixed;
  top: calc(-50vh + 6rem);
  right: calc(-50vw + 6rem);
  height: 100vh;
  width: 100vw;
  background-image: linear-gradient(
    to right bottom,
    ${props => props.theme.background.linearLight},
    ${props => props.theme.background.linearDark}
  );
  z-index: 950;

  backface-visibility: hidden;
  transform: scale(0.0001);
  animation-name: ${props => props.isOpen ? A_App.OpenNav : A_App.CloseNav};
  animation-fill-mode: forwards;
  animation-duration: 0.3s;

  & > ul {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    list-style: none;
    text-align: center;

    & > li {
      font-size: 3rem;
      color: ${props => props.theme.text.light};
      text-transform: uppercase;
      text-decoration: none;
      margin: 1rem;
      padding: 1rem 2rem;
      transition: all 0.3s ease-in;
      outline: none;
      background-image: linear-gradient(
        120deg,
        transparent 50%,
        ${props => props.theme.background.light} 50%
      );
      background-size: 220%;

      &:hover {
        background-position: 100%;
        color: ${props => props.theme.text.primary};
        transform: translateX(1rem);
      }
    }
  }
`