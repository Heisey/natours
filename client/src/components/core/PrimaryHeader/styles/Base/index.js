import styled from 'styled-components/macro'

import heroImage from '../../../../../assets/images/hero.jpg'

const backgroundGradient = (props) => {
  // return `
  //   url(${heroImage})
  // `

  return `
    linear-gradient(
      rgba(${props.theme.colorPrimaryLightRGBA}, 0.8), 
      rgba(${props.theme.colorPrimaryDarkRGBA}, 0.8)
    ),
    url(${heroImage})
  `
}

export const PrimaryHeader = styled.div`
  position: relative;
  height: 95vh;
  background-image: ${props => backgroundGradient(props)};
  /* background-image: linear-gradient(
    to right bottom, 
  rgba($color-primary-light, 0.8), 
  rgba($color-primary-dark, 0.8)), 
  url(../img/hero.jpg);  */
  /* so that the background image adjusts when we resize the window */
  background-size: cover;
  /* ensures the top of the image stays at the top of the container when we resize */
  /* it will crop from the bottom.  */
  /* There's also bottom and center */
  background-position: top;
  //need the webkit thing in 2017. not sure about now
  /* -webkit-background-clip: polygon(0 0, 100% 0, 100% 85%, 0 100%); */
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
`

export const Overlay = styled.div`
  position: absolute;
  height: 95vh;
  width: 100%;
  background-color: ${props => `rgba(${props.theme.colorPrimaryLightRGBA}, 0.8)`};
  z-index: 5;
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