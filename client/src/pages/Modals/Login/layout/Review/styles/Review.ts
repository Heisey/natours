
import Styled from 'styled-components/macro'

export const Review = Styled.div`

  & > h4 {
    font-size: 4rem;
    text-transform: capitalize;
  }

  & > h5 {
    font-size: 2rem;
    font-weight: bold;
  }
  
  & > :last-child {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between
  }
`