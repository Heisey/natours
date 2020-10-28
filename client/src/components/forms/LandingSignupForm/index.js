import React from 'react'
import { useFormik } from 'formik'

import { Headings } from '../../'
import styles from './styles'


const LandingSignupForm = () => {

  const submitHandler = values => {
    console.log(values)
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      groupSize: ''
    },
    onSubmit: submitHandler
  })

  return (
    <form action="#" className="form"
      onSubmit={formik.handleSubmit}
    >
      <styles.HeadingContainer>
        <Headings.SecondaryHeading>
          Start booking now
        </Headings.SecondaryHeading>
      </styles.HeadingContainer>

      <div className="form__group">
        <input 
          type="text" 
          className="form__input" 
          placeholder="Full name" 
          id="name" 
          required
          name='name'
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <label htmlFor="name" className="form__label">Full name</label>
      </div>

      <div className="form__group">
        <input 
          type="email" 
          className="form__input" 
          placeholder="Email address" 
          id="email" 
          required 
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="email" className="form__label">Email address</label>
      </div>

      <div className="form__group u-margin-bottom-medium">
        <div className="form__radio-group">
          <input 
            type="radio" 
            className="form__radio-input" 
            id="small" 
            name="groupSize" 
            value='small'
            onChange={formik.handleChange}
          />
          <label htmlFor="small" className="form__radio-label">
            Small tour group
            <span className="form__radio-button"></span>
          </label>
        </div>

        <div className="form__radio-group">
          <input 
            type="radio" 
            className="form__radio-input" 
            id="large" 
            name="groupSize"
            value='large'
            onChange={formik.handleChange}
          />
          <label htmlFor="large" className="form__radio-label">
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