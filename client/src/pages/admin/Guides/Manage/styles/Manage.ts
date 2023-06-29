
import Styled from 'styled-components/macro'

export const Manage = Styled.div`

  & > :not(:last-child) {
    margin-bottom: 1rem;
  }

  & > :first-child {
    display: flex;
    justify-content: space-between;
  }

  & > :last-child {

    & > :first-child {
      background-color: ${props => props.theme.background.primary};
      max-width: 100%;
    }
    
  }
`