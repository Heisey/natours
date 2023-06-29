
import Styled from 'styled-components/macro'

export const Footer = Styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.background.dark};

  padding: 8rem 0;

  & > img {
    width: 18rem;
    height: 18rem;
  }

  & > div {
    display: flex;
    width: 75%;
    justify-content: space-between;
    padding-top: 5rem;

    & > div {
      padding-top: 1rem;
      border-top: 2px solid ${props => props.theme.background.primary};
      width: 40%;
      margin-left: auto;
      font-size: 1.6rem;

      & > :first-child {
        margin-bottom: 1rem;
      }
    }
  }
`