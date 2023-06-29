
import * as React from 'react'

import * as Images from 'assets/images'

import * as Styles from './styles'

interface Props {
  className?: string
  variant?: 'green' | 'white'
}

const Logo: React.FC<Props> = (props) => {

  const generateImage = () => {
    if (props.variant === 'green') return Images.logo_green_2x
    return Images.logo_white
  }

  return (
    <Styles.Logo 
      className={props.className} 
      src={generateImage()} 
      alt='natours logo' 
    />
  )
}

Logo.defaultProps = {
  variant: 'white'
}

export const Component = Logo