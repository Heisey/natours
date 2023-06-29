
import Styled from 'styled-components/macro'

export const Fact = Styled.li`
  display: flex;
  align-items: center;
  
  margin-bottom: 0.3rem;

  & > * {
    font-size: 1.5rem;
  }

  & > :first-child {
    height: 3.5rem;
    width: 3.5rem;
    border-radius: 50%;
  }

  & > :not(:last-child) {
    margin-right: 1.5rem;
  }

  & > :nth-child(2) {
    font-weight: bold;
  }
`