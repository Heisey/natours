
import Styled from 'styled-components/macro'

export const PhotoBar = Styled.div`
  display: flex;
  background-color: lime;

  transform: skewY(-7deg);

  & > * {
    width: calc(100% / 3);
  }
`