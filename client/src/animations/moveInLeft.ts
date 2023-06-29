
import * as StyledUtils from 'styled-components'

export const moveInLeft = StyledUtils.keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }

  80% {
    transform: translateX(-20);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
`