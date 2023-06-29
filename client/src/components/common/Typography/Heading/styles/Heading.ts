
import styled from 'styled-components/macro'

import * as Core from 'core'

interface Props {
  color: Core.Models.TextColors
  bold: boolean
}

export const Heading = styled.h1<Props>`
  color: ${props => props.theme.text[props.color]};
  font-weight: ${props => props.bold ? 'bold' : 'normal'};
  display: block;
`