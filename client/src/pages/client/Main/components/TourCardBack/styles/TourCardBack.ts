
import Styled from 'styled-components/macro'

export const TourCardBack = Styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: rotateY(-180deg);
  backface-visibility: hidden;
  transition: all 0.8s ease-in;
  border-radius: 35px;
`