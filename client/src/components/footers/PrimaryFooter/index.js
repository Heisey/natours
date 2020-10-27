import React from 'react'
import styles from './styles'
import assets from '../../../assets'

const PrimaryFooter = () => {

  return (
    <styles.PrimaryFooter>
      <styles.LogoContainer>
        <styles.Logo src={assets.logos.logoGreenTwoTimes} alt="Full logo" />
      </styles.LogoContainer>
      <div class="row">
        <div class="col-1-of-2">
          <div class="footer__navigation">
            <ul class="footer__list">
              <li class="footer__item"><a href="/" class="footer__link">Company</a></li>
              <li class="footer__item"><a href="/" class="footer__link">Contact us</a></li>
              <li class="footer__item"><a href="/" class="footer__link">Careers</a></li>
              <li class="footer__item"><a href="/" class="footer__link">Privacy policy</a></li>
              <li class="footer__item"><a href="/" class="footer__link">Terms</a></li>
            </ul>
          </div>
        </div>
        <div class="col-1-of-2">
          <p class="footer__copyright">
            Designed by <a href="/" class="footer__link">Jonas Schmedtmann</a> for his online course <a href="/" class="footer__link">Advanced CSS and Sass</a>.
          </p>
        </div>
      </div>
    </styles.PrimaryFooter>
  )
}

export default PrimaryFooter