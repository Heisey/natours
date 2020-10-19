import React from 'react'
import styles from './styles'

import logoImage from '../../../assets/images/logo-white.png';

const PrimaryHeader = () => {

  return (
    <styles.PrimaryHeader>
      <styles.LogoBox>
        <styles.HeaderLogo src={logoImage} alt="Logo" />
      </styles.LogoBox>
      <styles.TextBox>
        <styles.Heading>
          <styles.HeadingMain class="heading-primary--main">Outdoors</styles.HeadingMain>
          <styles.HeadingSub class="heading-primary--sub">is where life happens</styles.HeadingSub>
        </styles.Heading>
        {/* //~~ Custom Link need to be built */}
        {/* <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a> */}
      </styles.TextBox>
    </styles.PrimaryHeader>
  )
}

export default PrimaryHeader