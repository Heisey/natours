
import Styled from 'styled-components/macro'

export const CardContainer = Styled.div`
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  
  min-width: 25rem;

  width: 75%;
  margin 0 auto;

  transform: skewY(7deg);

  position: relative;
  z-index: 60;
`