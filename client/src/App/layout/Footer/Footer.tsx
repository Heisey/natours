
import * as React from 'react'

import * as AnimatedText from 'components/abstract/Typography/AnimatedText'
import * as Logo from 'components/common/Typography/Logo'
import * as Text from 'components/common/Typography/Text'

import * as FooterNav from '../../components/FooterNav'

import * as Styles from './styles'

const Footer = () => {

  return (
    <Styles.Footer>
      <Logo.Component variant='green' />
      <div>
        <FooterNav.Component />
        <div>
          <Text.Component color='light'>
            Built by <AnimatedText.Component text='HEISEY' /> for his online portfolio
          </Text.Component>
          <Text.Component color='light'>
            <AnimatedText.Component text='ADVANCED CSS AND SASS' />. Copyright &copy; by Jonas Schmedtmann. You are 100% allowed to use this webpage for both personal and commercial use, but NOT to claim it as your own design. A credit to the original author, Jonas Schmedtmann, is of course highly appreciated!
          </Text.Component>
        </div>
      </div>
    </Styles.Footer>
  )
}

export const Component = Footer