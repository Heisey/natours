
import Styled from 'styled-components/macro'

import * as Core from 'core'

const backgroundColorStyles = (filled: boolean, theme: Core.Models.Theme) => {
  if (filled) return theme.background.primary;
  return theme.background.light
}

const colorStyles = (filled: boolean, theme: Core.Models.Theme) => {
  if (filled) return theme.text.light
  return theme.background.primary
}

interface Props {
  filled: boolean
  last: boolean
}

export const ProgressBarStep = Styled.span<Props>`
  display: block;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  background-color: ${props => backgroundColorStyles(props.filled, props.theme)};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${props => colorStyles(props.filled, props.theme)};

  border: 4px solid ${props => props.theme.background.primary};

  margin-right: 6rem;

  position: relative;

  &:not(:last-child) {
    
    &:after {
      content: '';
      height: 3px;
      background-color: ${props => props.theme.background.primary};
      width: 6rem;
      top: 50%;
      transform: translateY(-50%);
      right: calc(-6rem + -4px);
      display: block;
      position: absolute;
    }
  }
`