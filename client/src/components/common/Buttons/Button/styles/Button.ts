
import Styled from 'styled-components/macro'

import * as Core from 'core'

import * as M_Button from '../Models'

interface Args {
  theme: Core.Models.Theme
  variant: M_Button.Variant
  buttonTheme: M_Button.Theme
  disabled?: boolean
}

const generateArgs = (props: Props, theme: Core.Models.Theme) => {
  return { theme, ...props }
}

const backgroundStyles = (args: Args) => {
  if (args.disabled) return args.theme.background.disabled
  if (args.variant === 'outline' || args.variant === 'text') return 'transparent'
  if (args.buttonTheme === 'light') return args.theme.background.light
  return args.theme.background.primary
}

const backgroundHoverStyles = (args: Args) => {
  if (args.disabled) return args.theme.background.disabled
  if (args.variant === 'text') return args.theme.background.primary
  if (args.buttonTheme === 'light') return args.theme.background.primary
  return args.theme.background.light
}

const colorStyles = (args: Args) => {
  if (args.variant === 'outline' || args.variant === 'text') {
    if (args.buttonTheme === 'light') return args.theme.text.light
    return args.theme.text.primary
  }
  if (args.buttonTheme === 'light') return args.theme.text.primary
  return args.theme.text.light
}

const colorHoverStyles = (args: Args) => {
  if (args.disabled) return args.theme.text.light
  if (args.variant === 'outline' || args.variant === 'text') {
    if (args.buttonTheme === 'light') return args.theme.text.primary
    return args.theme.text.light
  }
  if (args.buttonTheme === 'light') return args.theme.text.light
  return args.theme.text.primary
}

const borderStyles = (args: Args) => {
  let color: string = ''
  if (args.buttonTheme === 'dark') color = args.theme.background.primary
  else color = args.theme.background.light
  if (args.variant === 'outline') return `5px solid ${color}`
  return 'none'
}

const borderRadiusStyles = (args: Args) => {
  if (args.variant === 'text') return '0'
  return '100px'
}

const boxShadowStyles = (args: Args) => {
  if (args.variant === 'text') return 'none'
  return `0 1rem 2rem ${args.theme.background.dark}80`
}

interface Props {
  variant: M_Button.Variant
  buttonTheme: M_Button.Theme
}

export const Button = Styled.button<Props>`
  padding: 12px 36px;
  border: ${props => borderStyles(generateArgs(props, props.theme))};
  border-radius: ${props => borderRadiusStyles(generateArgs(props, props.theme))};
  box-shadow: ${props => boxShadowStyles(generateArgs(props, props.theme))};
  background-color: ${props => backgroundStyles(generateArgs(props, props.theme))};
  color: ${props => colorStyles(generateArgs(props, props.theme))};
  font-size: 1.6rem;
  letter-spacing: 1.8px;
  font-weight: bold;
  transition: all 0.3s ease-in;
  display: flex;
  align-items: center;
  width: fit-content;

  &:hover {
    background-color: ${props => backgroundHoverStyles(generateArgs(props, props.theme))};
    color: ${props => colorHoverStyles(generateArgs(props, props.theme))};
  }
`