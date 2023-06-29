
import Styled from 'styled-components/macro'

export const Profile = Styled.button`

  display: flex;
  align-items: center;

  background-color: ${props => props.theme.background.primary};
  box-shadow: 0 1rem 2rem ${props => props.theme.background.dark}80;
  padding-right: 1rem;
  border-radius: 3rem;

  cursor: pointer;

  outline: none;
  border: none;

  & > :last-child {
    display: flex;
    font-size: 2rem;
    text-transform: capitalize;
    padding-left: 1rem;

    & > * {
      color: ${props => props.theme.text.light};
    }

    & > :last-child {
      margin-left: 1rem;
    }
  }
`