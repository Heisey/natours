
import Styled from 'styled-components/macro'

export const Nav = Styled.button`

  height: 6rem;
  width: 6rem;

  border-radius: 50%;
  background-color: ${props => props.theme.background.light};
  box-shadow: 0 1rem 2rem ${props => props.theme.background.dark}80;
  cursor: pointer;
`