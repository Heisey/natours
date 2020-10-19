import React from 'react'
import styles from './styles'

import logo from '../../../assets/images/logo-white.png'

const SecondaryHeader = () => {

  return (
    <styles.SecondaryHeader>
      <styles.Logo 
        src={logo}
      />
      Puppy SecondaryHeader
    </styles.SecondaryHeader>
  )
}

export default SecondaryHeader