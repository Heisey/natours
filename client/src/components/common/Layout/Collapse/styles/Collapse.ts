
import Styled from 'styled-components/macro'

interface Props {
  open: boolean
}

const cubicBezier = (args: Props) => {
  if (args.open) return '1, 0, 1, 0'
  return '0, 1, 0, 1'
}

const maxHeight = (args: Props) => {
  if (args.open) return '9999px'
  return '0'
}

export const Collapse = Styled.div<Props>`
  overflow: hidden;
  height: auto;
  max-height: ${props => maxHeight(props)};
  transition: all 0.5s cubic-bezier(${props => cubicBezier(props)});
`