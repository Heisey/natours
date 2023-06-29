
import Styled from 'styled-components/macro'

import * as Image from 'components/common/Images/Image'
import * as Heading from 'components/common/Typography/Heading'

export const SideBar = Styled.div`
  background-color: ${props => props.theme.background.primary};
  color: ${props => props.theme.text.light};
  
  height: calc(100% - 4rem);

  padding: 2rem 2rem;

  & > :first-child {
    display: flex;
    margin: 0 2rem;
    align-items: center;
    padding-bottom: 3rem;

    & > ${Heading.className} {
      color: ${props => props.theme.text.light};
      font-size: 3rem;
      margin-left: 2rem;
    }

    & > ${Image.className} {
      height: 3rem;
      width: auto;
    }
  }

  & > :last-child {
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 0;
  }
`