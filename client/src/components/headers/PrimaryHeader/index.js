import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'
import assets from '../../../assets'
import { Buttons } from '../../'

const PrimaryHeader = () => {

  return (
    <styles.PrimaryHeader>
      <styles.LogoBox>
        <Link to='/'>
          <styles.HeaderLogo src={assets.logos.logoWhite} alt="Logo" />
        </Link>
      </styles.LogoBox>
      <styles.TextBox>
        <styles.Heading>
          <styles.HeadingMain>Outdoors</styles.HeadingMain>
          <styles.HeadingSub>is where life happens</styles.HeadingSub>
        </styles.Heading>
        <Buttons.Primary
          to='/'
          color='white'
        >
          Discover our tours
        </Buttons.Primary>
      </styles.TextBox>
    </styles.PrimaryHeader>
  )
}

export default PrimaryHeader