
import * as React from 'react'

import * as AnimatedText from 'components/abstract/Typography/AnimatedText'

import * as Styles from './styles'

const FooterNav: React.FC = () => {

  return (
    <Styles.FooterNav>
      <ul>
        <li><AnimatedText.Component text='Company' /></li>
        <li><AnimatedText.Component text='Company' /></li>
        <li><AnimatedText.Component text='Company' /></li>
        <li><AnimatedText.Component text='Company' /></li>
        <li><AnimatedText.Component text='Company' /></li>
      </ul>
    </Styles.FooterNav>
  )
}

export const Component = FooterNav