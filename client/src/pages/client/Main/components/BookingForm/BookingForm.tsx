
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'
import * as TextInput from 'components/common/Inputs/Text'
import * as RadioInput from 'components/common/Inputs/Radio'

import * as SectionTitle from '../../components/SectionTitle'

import * as Styles from './styles'

const BookingForm: React.FC = () => {

  return (
    <Styles.BookingForm>
      <Styles.FormContent>
        <SectionTitle.Component>
          START BOOKING NOW
        </SectionTitle.Component>
        <Styles.TextInputGroup>
          <TextInput.Component 
            name='name'
            label='Full Name'
          />
          <TextInput.Component 
            type='email'
            name='email'
            label='Email Address'
          />
        </Styles.TextInputGroup>
        <Styles.RadioGroup>
          <RadioInput.Component 
            name='small'
            label='radio 1'
          />
          <RadioInput.Component 
            name='large'
            label='radio 2'
            checked
          />
        </Styles.RadioGroup>
        <Button.Component>
          Next Steps
        </Button.Component>
      </Styles.FormContent>
    </Styles.BookingForm>
  )
}

export const Component = BookingForm