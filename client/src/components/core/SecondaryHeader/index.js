import React from 'react'
import styles from './styles'


import logo from '../../../assets/images/logo-white.png'

const SecondaryHeader = () => {

  
  
  
  return (
    <styles.SecondaryHeader>
      <styles.Logo 
        src={logo}
      />
      <styles.ButtonContainer>
        <span>LOG IN</span>
        <span>SIGN UP</span>
      </styles.ButtonContainer>
    </styles.SecondaryHeader>
  )
}

export default SecondaryHeader