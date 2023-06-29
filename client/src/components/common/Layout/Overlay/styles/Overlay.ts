
import Styled from 'styled-components/macro'

import * as Images from 'assets/images'
// import * as Core from 'core'
import * as Server_Tour from 'server/Tours'
import * as Utils_Styles from 'utils/Styles'

interface Props {
  zIndex: number;
  colorTheme: Server_Tour.Models.Environment
  img?: string
}

export const Overlay = Styled.div<Props>`
  background-image: linear-gradient(
    to right bottom,
      ${props => Utils_Styles.generateLinearColor({ ...props, variant: 'light' })},
      ${props => Utils_Styles.generateLinearColor({ ...props, variant: 'dark' })},
      url(${props => props.img && Images[props.img as keyof typeof Images]})
  );

  position: absolute;

  top: 0;
  left: 0;
  right: 0;

  height: 100%;

  z-index: ${props => props.zIndex};
`