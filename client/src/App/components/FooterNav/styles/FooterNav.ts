
import Styled from 'styled-components/macro'

export const FooterNav = Styled.nav`

border-top: 2px solid ${props => props.theme.background.primary};

  ul {
    padding-top: 1rem;
    display: flex;
    width: 100%;
    list-style: none;

    li {

      &:not(:last-child) {
        margin-right: 1.6rem;
      }
    }

    
  }
`