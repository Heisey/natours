
import * as React from 'react'

import * as AnimatedButton from 'components/common/Buttons/Animated'

import * as AnimatedTourCard from '../../components/AnimatedTourCard'
import * as SectionTitle from '../../components/SectionTitle'

import * as Styles from './styles'

const Tours: React.FC = () => {

  return (
    <Styles.Tours>
      <SectionTitle.Component>
        MOST POPULAR TOURS
      </SectionTitle.Component>
      <Styles.CardContainer>
        <AnimatedTourCard.Component />
        <AnimatedTourCard.Component />
        <AnimatedTourCard.Component />
      </Styles.CardContainer>
      <AnimatedButton.Component
        theme='dark'
      >
        Discover all tours
      </AnimatedButton.Component>
    </Styles.Tours>
  )
}

export const Component = Tours