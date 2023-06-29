
import Styled from 'styled-components/macro'

import * as Button from 'components/common/Buttons/Button'
import * as Core from 'core'

interface Args {
  buttonTheme: Button.Models.Theme
  theme: Core.Models.Theme
}

const generateArgs = (props: Props, theme: Core.Models.Theme): Args => ({
  buttonTheme: props.buttonTheme,
  theme
})

const backgroundColorStyles = (args: Args) => {
  if (args.buttonTheme === 'dark') return args.theme.background.primary
  return args.theme.background.light
}

const colorStyles = (args: Args) => {
  if (args.buttonTheme === 'dark') return args.theme.text.light
  return args.theme.text.dark
}

interface Props {
  buttonTheme: Button.Models.Theme
}

export const Animated = Styled.button<Props>`
  text-transform: uppercase;
  padding: 15px 48px;
  background-color: ${props => backgroundColorStyles(generateArgs(props, props.theme))};
  display: block;
  border: 0;
  border-radius: 100px;
  box-shadow: none;
  outline: none;
  transition: all 0.3s;
  color: ${props => colorStyles(generateArgs(props, props.theme))};
  position: relative;

  &:after {
    content: '';
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 100px;
    position: absolute;
    background-color: ${props => backgroundColorStyles(generateArgs(props, props.theme))};
    top: 0;
    left: 0;
    z-index: -1;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem #00000020;

    &:after {
      transform: scaleX(1.3) scaleY(1.5);
      opacity: 0;
      transition: all 0.3s;
    }
  }

  &:active {
    transform: translateY(3px);
    box-shadow: 0 0.5rem 1rem #00000020;
  }

  
`