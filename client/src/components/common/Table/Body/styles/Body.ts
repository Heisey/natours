
import Styled from 'styled-components/macro'

export const Body = Styled.tbody`

  & > :nth-child(even) {
    color: ${props => props.theme.text.light};
    background-color: ${props => props.theme.background.primary};
  }
  & > :nth-child(odd) {
    background-color: white;
  }

  & > * > :nth-child(even) {
    color: ${props => props.theme.text.light};
    background-color: ${props => props.theme.background.secondary};
  }

  & > * > * {
    font-size: 1.3rem;
  }

  & > * > :first-child {
    text-align: left;
    padding-left: 0.5rem;
  }
`