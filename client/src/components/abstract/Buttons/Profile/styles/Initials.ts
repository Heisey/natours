
import Styled from 'styled-components/macro'

export const Initials = Styled.div`
  display: flex;

  background-color: ${props => props.theme.background.light};
  border-radius: 50%;

  
  height: 5rem;
  width: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  

  & > * {
    font-size: 2.5rem;
    color: ${props => props.theme.text.primary};
    text-transform: uppercase;
    font-weight: bold;
  }

  & > :last-child {
    margin-left: 0.5rem;
  }
`