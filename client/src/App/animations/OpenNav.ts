
import * as Styled from 'styled-components'

export const OpenNav =  Styled.keyframes`
  0% {
    top: calc(-50vh + 9rem);
    right: calc(-50vw + 9rem);
  }

  20% {
    transform: scale(0.1);
  }

  100% {
    transform: scale(1);
    top: 0;
    right: 0;
  }
`