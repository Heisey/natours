
import * as React from 'react'

import * as BookingForm from '../../components/BookingForm'

import * as Styles from './styles'

const Booking = () => {

  return (
    <Styles.Booking>
      <div>
        <BookingForm.Component />
      </div>
    </Styles.Booking>
  )
}

export const Component = Booking