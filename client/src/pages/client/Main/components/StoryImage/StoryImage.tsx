
import * as React from 'react'

import * as Images from 'assets/images'

import * as Styles from './styles'


const StoryImage: React.FC = () => {

  return (
    <Styles.StoryImage>
      <img src={Images.nat8} alt='' />
      <figcaption>puppies</figcaption>
    </Styles.StoryImage>
  )
}

export const Component = StoryImage