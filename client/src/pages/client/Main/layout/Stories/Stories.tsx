
import * as React from 'react'

import * as AnimatedTextButton from '../../components/AnimatedTextButton'
import * as BackgroundVideo from '../../components/BackgroundVideo'
import * as SectionTitle from '../../components/SectionTitle'
import * as Story from '../../components/Story'

import * as Styles from './styles'

const Stories: React.FC = () => {

  return (
    <Styles.Stories>
    <BackgroundVideo.Component />
      <SectionTitle.Component>We make people genuinely happy</SectionTitle.Component>
      <div>
        <Story.Component />
        <Story.Component />
      </div>
      <AnimatedTextButton.Component>
        Read all stories
      </AnimatedTextButton.Component>
    </Styles.Stories>
  )
}

export const Component = Stories