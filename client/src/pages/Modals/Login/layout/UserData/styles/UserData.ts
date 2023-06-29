
import Styled from 'styled-components/macro'

export const UserData = Styled.div`
  display: flex;
  flex-direction: column;

  & > h4 {
    font-size: 4rem;
    text-transform: capitalize;
  }

  & > form > :not(:last-child) {
    margin-bottom: 1rem;
  }

  & > :last-child {
    padding-top: 5rem;
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
 `