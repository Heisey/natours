
import Styled from 'styled-components/macro'

export const UserPreferences = Styled.div`

  & > h4 {
    font-size: 4rem;
    text-transform: capitalize;
  }

  & > form > * {
    margin-bottom: 1rem;
  }

  & > :last-child {
    margin-top: 3rem;
    display: flex;
    justify-content: space-between
  }
`