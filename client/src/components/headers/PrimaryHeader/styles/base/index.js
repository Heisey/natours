import styled from 'styled-components/macro'
import assets from '../../../../../assets'

import {linearGradientGenerator} from '../../../../../utilities/helpers/linearGradientGenerator'

export const PrimaryHeader = styled.div`
  position: relative;
  height: 95vh;
  background-image: ${props => linearGradientGenerator(props, assets.images.tourSevenCover)};
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