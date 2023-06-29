
import Styled from 'styled-components/macro'

export const Sidebar = Styled.div`
  background-color: ${props => props.theme.background.primary};
  min-height: 50vh;

  & > ul {
    display: flex;
    flex-direction: column;
    height: 100%;

    & > :last-child {
      margin-top: auto;
      justify-self: flex-end;
      background-color: ${props => props.theme.background.danger};
    }
  }
`