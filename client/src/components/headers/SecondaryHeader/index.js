import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import assets from '../../../assets'

const SecondaryHeader = () => {

  return (
    <styles.SecondaryHeader>
      <Link to='/'>
        <styles.Logo 
          src={assets.logos.logoWhite}
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