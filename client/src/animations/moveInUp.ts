
import * as StyledUtils from 'styled-components'

export const moveInUp = StyledUtils.keyframes`
  0% {
    opacity: 0;
    transform: translateY(100px);
  }

  80% {
    transform: translateY(20);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`