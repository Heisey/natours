
import Styled from 'styled-components/macro'

export const Footer = Styled.div`
  margin-top: 2rem;
  display: flex;

  & > :last-child {
    margin-left: 1rem;
    display: block;
    cursor: pointer;
  }
`