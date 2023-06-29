
import * as React from 'react'

import * as Styles from './styles'

const HeroBox: React.FC = () => {

  return (
    <Styles.HeroBox>
      <Styles.PageHeading
        color='light'
      >
        outdoors
      </Styles.PageHeading>
      <Styles.PageSubHeading
        variant='span'
        bold
      >
        is where life happens
      </Styles.PageSubHeading>
      <Styles.Button>
        Discover our tours
      </Styles.Button>
    </Styles.HeroBox>
  )
}

export const Component = HeroBox