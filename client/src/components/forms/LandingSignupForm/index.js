import React from 'react'
import { Headings } from '../../'
import styles from './styles'

const LandingSignupForm = () => {

  return (
    <form action="#" className="form">
      <styles.HeadingContainer>
        <Headings.SecondaryHeading>
          Start booking now
        </Headings.SecondaryHeading>
      </styles.HeadingContainer>

      <div className="form__group">
        <input type="text" className="form__input" placeholder="Full name" id="name" required />
        <label for="name" className="form__label">Full name</label>
      </div>

      <div className="form__group">
        <input type="email" className="form__input" placeholder="Email address" id="email" required />
        <label for="email" className="form__label">Email address</label>
      </div>

      <div className="form__group u-margin-bottom-medium">
        <div className="form__radio-group">
          <input type="radio" className="form__radio-input" id="small" name="size" />
          <label for="small" className="form__radio-label">
            Small tour group
            <span className="form__radio-button"></span>
          </label>
        </div>

        <div className="form__radio-group">
          <input type="radio" className="form__radio-input" id="large" name="size"/>
          <label for="large" className="form__radio-label">
            Large tour group
            <span className="form__radio-button"></span>
          </label>

        </div>
      </div>

      <div className="form__group">
        <button className="btn btn--green">Next step &rarr;</button>
      </div>
    </form>
  )
}

export default LandingSignupForm