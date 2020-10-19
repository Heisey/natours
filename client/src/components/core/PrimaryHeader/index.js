import React from 'react'
import styles from './styles'

import logoImage from '../../../assets/images/logo-white.png';

const PrimaryHeader = () => {

  return (
    <styles.PrimaryHeader>
    {/* <styles.Overlay /> */}
      <styles.LogoBox>
        <styles.HeaderLogo src={logoImage} alt="Logo" />
      </styles.LogoBox>
      <styles.TextBox class="header__text-box">
        <h1 class="heading-primary">
          <span class="heading-primary--main">Outdoors</span>
          <span class="heading-primary--sub">is where life happens</span>
        </h1>
        <a href="#section-tours" class="btn btn--white btn--animated">Discover our tours</a>
      </styles.TextBox>
    </styles.PrimaryHeader>
  )
}

export default PrimaryHeader