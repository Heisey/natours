
import * as React from 'react'

import * as About from '../About'
// import * as Booking from '../Booking'
import * as Feature from '../Feature'
import * as Stories from '../Stories'
import * as Tours from '../Tours'

import * as Styles from './styles'

const Body: React.FC = () => {

  return (
    <Styles.Body>
      <About.Component />
      <Feature.Component />
      <Tours.Component />
      <Stories.Component />
      {/* TODO - need to rethink booking form */}
      {/* <Booking.Component /> */}
    </Styles.Body>
  )
}

export const Component = Body