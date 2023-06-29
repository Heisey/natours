
import Styled from 'styled-components/macro'

export const Facts = Styled.div`

  margin-bottom: 2rem;
  width: fit-content;

  & > :first-child {
    text-transform: capitalize;
    margin-bottom: 0.6rem;
    font-weight: bold;
    color: ${props => props.theme.text.primary};
    font-size: 2.3rem;
  }
`