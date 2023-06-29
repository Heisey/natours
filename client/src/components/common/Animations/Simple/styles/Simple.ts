
import Styled from 'styled-components/macro'

import * as Styles from '.'

export const Simple = Styled.div`
  & > * {
    width: 48px;
    height: 48px;
    border: 5px solid #FFF;
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: ${Styles.animate} 1s linear infinite;
  }
`