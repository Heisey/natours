
import Styled from 'styled-components/macro'

export const Footer = Styled.div`
  display: flex;

  align-items: center;
  
  & > :first-child {
    font-size: 1.8rem;
  }
  & > :last-child {
    margin-left: auto;
    max-height: 3rem;
  }
`