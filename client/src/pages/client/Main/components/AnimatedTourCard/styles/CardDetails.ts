
import Styled from 'styled-components/macro'

export const CardDetails = Styled.div`

  padding: 3rem;
  
  ul {
    list-style: none;
    width: 80%;
    margin: 0 auto;

    li {
      text-align: center;
      font-size: 1.5rem;
      padding: 1rem;
      
      &:not(:last-child) {
        border-bottom: 1px solid ${props => props.theme.background.grey};
      }
    }
  }
`