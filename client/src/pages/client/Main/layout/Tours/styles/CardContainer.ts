
import Styled from 'styled-components/macro'

export const CardContainer = Styled.div`
  width: 75%;
  margin: 0 auto;

  display: grid;

  grid-template-columns: repeat(3, 1fr);

  column-gap: 2rem;
`