import React from 'react'
import styles from './styles'
import assets from '../../../assets'

const PrimaryFooter = () => {

  return (
    <styles.PrimaryFooter>
      <styles.LogoContainer>
        <styles.Logo src={assets.logos.logoGreenTwoTimes} alt="Full logo" />
      </styles.LogoContainer>
      <styles.ContentContainer>
        <styles.NavContainer>
          <styles.Navigation>
            <styles.ListContainer>
              <styles.ListItem><a href="/" class="footer__link">Company</a></styles.ListItem>
              <styles.ListItem><a href="/" class="footer__link">Contact us</a></styles.ListItem>
              <styles.ListItem><a href="/" class="footer__link">Careers</a></styles.ListItem>
              <styles.ListItem><a href="/" class="footer__link">Privacy policy</a></styles.ListItem>
              <styles.ListItem last><a href="/" >Terms</a></styles.ListItem>
            </styles.ListContainer>
          </styles.Navigation>
        </styles.NavContainer>
        <styles.CopyrightContainer>
          <p class="footer__copyright">
            Designed by <a href="/" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="/" class="footer__link">Advanced CSS and Sass</a>.
          </p>
        </styles.CopyrightContainer>
      </styles.ContentContainer>
    </styles.PrimaryFooter>
  )
}

export default PrimaryFooter