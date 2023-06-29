
import Styled from 'styled-components/macro'

import * as Text from 'components/common/Typography/Text'
import * as Core from 'core'

interface Props {
  active: 0 | 1
}

const buttonBackgroundColor = (args: Props, theme: Core.Models.Theme) => {
  if (args.active === 0) return `${theme.background.light}35`
  return 'transparent'
}

export const MenuDropdown = Styled.li<Props>`
  & > :first-child {
    width: calc(100% - 4rem);
    background-color: ${props => buttonBackgroundColor(props, props.theme)};
    padding: 1rem 2rem;
    border: none;
    text-align: left;
    display: flex;
    align-items: center;

    & > :first-child {
      fill: ${props => props.theme.text.light};
    }


    & > ${Text.ClassName} {
      font-size: 2rem;
      color: ${props => props.theme.text.light};
      text-transform: capitalize;
      margin-left: 2rem;
    }

    &:hover {
      background-color: ${props => props.theme.background.light}35;
    }
  }

  & > :last-child {
    
    margin-block-start: 0;
    margin-block-end: 0;
    padding-inline-start: 3rem;
  }
`