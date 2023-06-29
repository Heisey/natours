
import Styled from 'styled-components/macro'

export const Outlet = Styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100vh;
  width: 100%;

  & > :last-child {
    margin: 0 2rem;
    width: 100%;

    & > :last-child {
  padding-top: 4rem;
    }
  }
`