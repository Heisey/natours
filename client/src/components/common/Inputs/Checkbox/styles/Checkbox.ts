
import Styled from 'styled-components/macro'

interface Props {
  checked: boolean
}

const spanTransform = (args: Props) => {
  if (!args.checked) return 'scale(0)'
  return 'scale(1)'
}

export const Checkbox = Styled.div<Props>`
  position: relative;

  & >  input {
    visibility: hidden;
    position: absolute;
  }
  
  & > label {
    font-size: 1.6rem;
    cursor: pointer;
    display: flex;
    text-transform: capitalize;

    & > :first-child {
      display: block;
      height: 1.3rem;
      width: 1.3rem;
      outline: 4px solid ${props => props.theme.background.primary};
      z-index: -1;
      position: relative;
      border-radius: 3px;
      overflow: hidden;
      margin-right: 1rem;
      margin-top: 0.6rem;

      &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        height: 120%;
        width: 120%;
        transform: translate(-50%, -59%) ${props => spanTransform(props)};
        background-color: ${props => props.theme.background.primary};
      }
    }
  }
`