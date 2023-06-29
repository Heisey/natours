
import Styled from 'styled-components/macro'

import * as Image from 'components/common/Images/Image'

const generateTopPosition = (index: number) => {
  if (index === 0) return '-2rem'
  if (index === 1) return '2rem'
  return '10rem'
}

const generateLeftPosition = (index: number) => {
  if (index === 0) return '20%'
  if (index === 1) return 'auto'
  return '0'
}

const generateRightPosition = (index: number) => {
  if (index === 1) return 0
  return 'auto'
}

interface Props {
  index: number
}

export const Picture = Styled(Image.Component)<Props>`
  width: 55%;
  box-shadow: 0 1.5rem 4rem ${props => props.theme.background.dark}60;
  border-radius: 2px;
  position: absolute;
  top: ${props => generateTopPosition(props.index)};
  left: ${props => generateLeftPosition(props.index)};
  right: ${props => generateRightPosition(props.index)};
  z-index: ${props => props.index + 10};
  transition: all 0.3s ease-in;
  outline-offset: 2rem;
  outline: 0em solid ${props => props.theme.background.primary};

  &:hover {
    z-index: ${props => props.index + 100};
    transform: scale(1.1);
    box-shadow: 0 2.5rem 4rem ${props => props.theme.background.dark}90;
    outline: 1.5rem solid ${props => props.theme.background.primary};
    border-radius: 25px;
  }
`