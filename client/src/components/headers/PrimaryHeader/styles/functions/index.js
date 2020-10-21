
import heroImage from '../../../../../assets/images/hero.jpg'

export const backgroundGradient = (props) => {

  return `
    linear-gradient(
      rgba(${props.theme.colorPrimaryLightRGBA}, 0.8), 
      rgba(${props.theme.colorPrimaryDarkRGBA}, 0.8)
    ),
    url(${heroImage})
  `
}