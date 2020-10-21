import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

import logo from '../../../assets/images/logo-white.png'

const SecondaryHeader = () => {

  return (
    <styles.SecondaryHeader>
      <Link to='/'>
        <styles.Logo 
          src={logo}
        />
      </Link>
      <styles.ButtonContainer>
        <span>LOG IN</span>
        <span>SIGN UP</span>
      </styles.ButtonContainer>
    </styles.SecondaryHeader>
  )
}

export default SecondaryHeader