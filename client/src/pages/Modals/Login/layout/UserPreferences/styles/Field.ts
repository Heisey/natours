
import Styled from 'styled-components/macro'

export const Field = Styled.div`
  display: flex;

  flex-direction: column;
  align-items: start;

  & > :first-child {
    margin-bottom: 0.2rem;
    font-size: 1.5rem;
    font-weight: bold;
  }

  & > :last-child {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & > :not(:last-child) {
      margin-right: 1.5rem;
    }
  }
`