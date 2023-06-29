
import Styled from 'styled-components/macro'

export const BackgroundVideo = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  opacity: 0.15;
  overflow: hidden;
  width: 100%;

  & > video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`