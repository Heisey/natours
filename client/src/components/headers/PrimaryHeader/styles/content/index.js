import styled from 'styled-components/macro'
import {
  moveInLeft,
  moveInRight
} from '../Animations'

export const HeaderLogo = styled.img`
  height: 3.5rem;
`

export const Heading = styled.h1`
  color: ${props => props.theme.colorWhite};
  text-transform: uppercase;

  /*determines whether the back of the element is visible. Useful for things that rotate etc
  but in this case it's a hack to prevent a weird shakey thing in browsers that no one understands*/
  backface-visibility: hidden;
  margin-bottom: 6rem;
`

export const HeadingMain = styled.span`
  display: block;
  font-size: 6rem;
  font-weight: 400;
  letter-spacing: 3.5rem;
  animation-name: ${moveInLeft};
  animation-duration: 1s;
  animation-timing-function: ease-out;
`

export const HeadingSub = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1.7rem;
  animation-name: ${moveInRight};
  animation-duration: 1s;
  animation-timing-function: ease-out;
`