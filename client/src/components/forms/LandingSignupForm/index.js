import React from 'react'
import { useFormik } from 'formik'

import { Headings } from '../../'
import FormComponents from './components'
import styles from './styles'
import { Buttons } from '../../'


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
    <styles.Form action="#" className="form"
      onSubmit={formik.handleSubmit}
    >
      <styles.HeadingContainer>
        <Headings.SecondaryHeading>
          Start booking now
        </Headings.SecondaryHeading>
      </styles.HeadingContainer>

      <FormComponents.Group>
        <FormComponents.Input 
          inputId='name'
          inputType="text" 
          inputPlaceholder="Full name" 
          inputRequired
          inputName='name'
          inputValue={formik.values.name}
          handleChange={formik.handleChange}
        />
        {/* <FormComponents.Label 
          labelFor="name"
        >
          FULL NAME
        </FormComponents.Label> */}
      </FormComponents.Group>

      <FormComponents.Group>
        <FormComponents.Input 
          inputType="email" 
          inputPlaceholder="Email address"  
          inputRequired 
          inputName='email'
          inputValue={formik.values.email}
          handleChange={formik.handleChange}
        />
        {/* <FormComponents.Label 
          labelFor="email"
        >
          Email address
        </FormComponents.Label> */}
      </FormComponents.Group>

      <FormComponents.Group
        // last
      >
        <FormComponents.RadioGroup 
          inputId='small'
          inputName='groupSize'
          value='small'
          handleChange={formik.handleChange}
          text='Small Group Tour'
          checked
        />

        <FormComponents.RadioGroup 
          inputId='large'
          inputName='groupSize'
          value='large'
          handleChange={formik.handleChange}
          text='Large Group Tour'
        />
      </FormComponents.Group>

      <FormComponents.Group className="form__group">
        <Buttons.Primary
          to='/tours'
          color='green'
        >
          Next step &rarr;
        </Buttons.Primary>
      </FormComponents.Group>
    </styles.Form>
  )
}

export default LandingSignupForm