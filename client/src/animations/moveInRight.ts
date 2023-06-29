
import * as StyledUtils from 'styled-components'

export const moveInRight = StyledUtils.keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }

  80% {
    transform: translateX(20);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`