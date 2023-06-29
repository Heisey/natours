
import Styled from 'styled-components/macro'

export const Main = Styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  row-gap: 3rem;
  height: fit-content;
`