
import * as React from 'react'

import * as TourCardBack from '../TourCardBack'

import * as Styles from './styles'

const AnimatedTourCard: React.FC = () => {
  
  return (
    <Styles.AnimatedTourCard>
      <Styles.Header />
      <Styles.Title variant='h4'>
        <span>
          The Snow Adventure
        </span>
      </Styles.Title>
      <Styles.CardDetails>
        <ul>
          <li>3 days tour</li>
          <li>Up to 30 People</li>
          <li>2 Tour Guides</li>
          <li>Sleep in Cozy hotels</li>
          <li>Difficulty: Easy</li>
        </ul>
      </Styles.CardDetails>
      <TourCardBack.Component />      
    </Styles.AnimatedTourCard>
  )
}

export const Component = AnimatedTourCard