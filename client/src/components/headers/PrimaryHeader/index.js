import React from 'react'
import styles from './styles'
import { Link } from 'react-router-dom'

import logoImage from '../../../assets/images/logo-white.png';

const PrimaryHeader = () => {

  return (
    <styles.PrimaryHeader>
      <styles.LogoBox>
        <Link to='/'>
          <styles.HeaderLogo src={logoImage} alt="Logo" />
        </Link>
      </styles.LogoBox>
      <styles.TextBox>
        <styles.Heading>
          <styles.HeadingMain>Outdoors</styles.HeadingMain>
          <styles.HeadingSub>is where life happens</styles.HeadingSub>
        </styles.Heading>
        {/* //~~ Custom Link need to be built */}
        <a href="/tours" class="btn btn--white btn--animated">Discover our tours</a>
      </styles.TextBox>
    </styles.PrimaryHeader>
  )
}

export default PrimaryHeader