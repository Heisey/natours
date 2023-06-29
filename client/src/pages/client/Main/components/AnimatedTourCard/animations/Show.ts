
import * as Styled from 'styled-components'

export const Show = Styled.keyframes`
  from {
    opacity: 0;
    visibility: visible;
  }

  to {
    visibility: visible;
    opacity: 1;
  }
`

export const Hide = Styled.keyframes`
  from {
    opacity: 1;
    visibility: visible;
  }

  to {
    opacity: 0;
    visibility: hidden;
  }
`