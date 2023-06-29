
import * as React from 'react'

import * as Icons from 'assets/icons'
import * as Images from 'assets/images'
import * as Image from 'components/common/Images/Image'
import * as Text from 'components/common/Typography/Text'

import * as Styles from './styles'

const Review: React.FC = () => {

  return (
    <Styles.Review>
      <div>
        <Image.Component src={Images.nat9} />
        <Text.Component>Archie Puppy</Text.Component>
      </div>
      <Text.Component>
        Non vitae in molestiae magni et amet facilis et esse iure sit beatae libero non minima rerum. Sed consequatur autem sit quasi expedita nam mollitia deserunt eos explicabo consequatur. 
      </Text.Component>
      <div>
        <Icons.Outline.Star size='25' />
        <Icons.Outline.Star size='25' />
        <Icons.Outline.Star size='25' />
        <Icons.Outline.Star size='25' />
        <Icons.Outline.Star size='25' />
      </div>
    </Styles.Review>
  )
}

export const Component = Review