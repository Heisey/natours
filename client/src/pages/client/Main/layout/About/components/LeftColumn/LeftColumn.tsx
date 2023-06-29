
import * as React from 'react'

import * as AnimatedTextButton from '../../../../components/AnimatedTextButton'
import * as Styles from '../../styles'

const LeftColumn: React.FC = () => {

  return (
    <div>
      <Styles.SubTitle
        variant='h3'
        bold
      >
        YOU'RE GOING TO FALL IN LOVE WITH NATURE
      </Styles.SubTitle>
      <Styles.Passage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.
      </Styles.Passage>

      <Styles.SubTitle
        variant='h3'
        bold
      >
        LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
      </Styles.SubTitle>
      <Styles.Passage>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla deserunt voluptatum nam.
      </Styles.Passage>
      <AnimatedTextButton.Component>
        Learn more
      </AnimatedTextButton.Component>
    </div>
  )
}

export const Component = LeftColumn