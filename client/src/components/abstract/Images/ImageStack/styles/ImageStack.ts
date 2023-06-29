
import Styled from 'styled-components/macro'

import { Picture } from './Picture'

export const ImageStack = Styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:hover {
    ${Picture}:not(:hover) {
      transform: scale(0.95);
    }
  }
`