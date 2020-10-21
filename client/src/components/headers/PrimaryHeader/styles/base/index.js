import styled from 'styled-components/macro'

import { backgroundGradient } from '../functions'

export const PrimaryHeader = styled.div`
  position: relative;
  height: 95vh;
  background-image: ${props => backgroundGradient(props)};
  background-size: cover;
  background-position: top;
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

export const LogoBox = styled.div`
  position: absolute;
  top: 4rem;
  left: 4rem;
`

export const TextBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`