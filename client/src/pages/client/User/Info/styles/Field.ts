
import Styled from 'styled-components/macro'

export const Field = Styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  
  margin-bottom: 1rem;
  
  & > * {
    font-size: 1.5rem;
  }

  & > :first-child {
    font-weight: bold;
    margin-right: 3rem;
  }
`