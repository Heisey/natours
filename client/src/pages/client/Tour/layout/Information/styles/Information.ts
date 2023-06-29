
import Styled from 'styled-components/macro'

export const Information = Styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  align-items: center;
  justify-items: center;
  padding: 8rem 0;
  margin-bottom: 6rem;
/* 
  & > :first-child {
    background-color: violet;
  } */

  & > :last-child {

    max-width: 80%;

    & > :first-child {
      margin-bottom: 0.6rem;
      font-size: 2.3rem;
    }

    & > :not(:first-child) {
      font-size: 1.5rem;
      margin-bottom: 0.8rem;
      /* font-size:  */
    }
  }
`