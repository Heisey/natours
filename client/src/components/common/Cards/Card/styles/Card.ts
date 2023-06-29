
import Styled from 'styled-components/macro'

export const Card = Styled.div`
  /* background-color: pink; */
  border-radius: 5px;
  box-shadow: 0 1.5rem 4rem ${props => props.theme.background.dark}40;
  height: fit-content;

  width: 100%;
  max-width: 100rem;
`