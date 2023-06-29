
import Styled from 'styled-components/macro'

import * as Image from 'components/common/Images/Image'

export const Header = Styled.div`

  background-color: ${props => props.theme.background.primary};

  & > :last-child {
    margin-left: auto;
    width: fit-content;

    display: flex;
    align-items: center;
    padding: 1rem;

    & > :first-child {
      color: ${props => props.theme.text.light};
      font-size: 1.5rem;
      margin-right: 2rem;
      align-self: start;
      font-weight: bold;
    }

    & > ${Image.className} {
      height: 4rem;
      width: 4rem;
      border-radius: 50%;
      margin-right: 1rem;
    }
  }
`