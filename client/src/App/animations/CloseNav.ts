
import * as Styled from 'styled-components'


export const CloseNav = Styled.keyframes`
  0% {
    transform: scale(0.8);
  }

  20% {
    top: calc(-50vh + 6rem);
    right: calc(-50vw + 6rem);
  }

  100% {
    transform: scale(0.001);
    top: calc(-50vh + 6rem);
    right: calc(-50vw + 6rem);
  }
`