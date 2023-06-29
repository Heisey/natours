
import Styled from 'styled-components/macro'

export const Create = Styled.div`

  & > * {
    border: 6px solid ${props => props.theme.background.primary};
    padding: 2rem 3rem;
    width: 45%;
    max-width:  40rem;

    & > :first-child {
      display: flex;
      align-items: center;
      margin-bottom: 3rem;

      & > :last-child {
        margin-left: 2rem;
        font-size: 3rem;
        font-weight: bold;
      }
    }

    & > :nth-child(2) {
      & > * {
        margin-bottom: 1rem;
      }

      & > :not(:last-child) {
        width: 100%;

        & > * {
          width: 95%;
        }

        
      }

      & > :last-child {
        margin-top: 6rem;
        margin-left: auto;
      }
    }
  }

  
`