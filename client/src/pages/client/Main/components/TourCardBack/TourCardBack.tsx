
import * as React from 'react'

import * as Button from 'components/common/Buttons/Button'
import * as Text from 'components/common/Typography/Text'
import * as Core from 'core'

import * as Styles from './styles'

const TourCardBack: React.FC = () => {

  return (
    <Styles.TourCardBack>
      <Styles.RoundedOverlay colorTheme={Core.config.tourCategories.snow} />
      <Styles.CardBackDetails>
        <div>
          <Text.Component variant='span'>only</Text.Component>
          <Styles.Price>$297</Styles.Price>
          <Button.Component>book now!</Button.Component>
        </div>
      </Styles.CardBackDetails>
    </Styles.TourCardBack>
  )
}

export const Component = TourCardBack