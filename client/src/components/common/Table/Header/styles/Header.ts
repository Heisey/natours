
import Styled from 'styled-components/macro'

export const Header = Styled.thead`
  /* width: 100%; */
  color: ${props => props.theme.text.light};
  font-size: 2rem;
  text-transform: capitalize;
  background-color: ${props => props.theme.background.primary};
  
  & > * > :first-child {
    text-align: left;
  }
`