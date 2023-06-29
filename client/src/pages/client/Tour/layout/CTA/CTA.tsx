
import * as React from 'react'

import * as Images from 'assets/images'
import * as Button from 'components/common/Buttons/Button'
import * as Card from 'components/common/Cards/Card'
import * as Image from 'components/common/Images/Image'
import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

const CTA: React.FC = () => {

  return (
    <Styles.CTA>
      <Card.Component>
        <div>
          <Image.Component src={Images.nat1} />
          <Image.Component src={Images.nat2} />
          <Image.Component src={Images.nat3} />
        </div>
        <div>
          <Text.Component>
            What are you waiting for?
          </Text.Component>
          <Text.Component>
            10 days, 1 adventure, Infinite moments, Make it yours today
          </Text.Component>
        </div>
        <Button.Component>
          Book
        </Button.Component>
      </Card.Component>
    </Styles.CTA>
  )
}

export const Component = CTA