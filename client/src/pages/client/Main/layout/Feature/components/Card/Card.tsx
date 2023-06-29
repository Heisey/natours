
import * as React from 'react'

import * as Heading from 'components/common/Typography/Heading'
import * as Text from 'components/common/Typography/Text'

import * as Styles from '../../styles'

interface Props {
  icon: React.ReactNode
  title: string
  message: string
}

const Card: React.FC<Props> = (props) => {

  return (
    <Styles.Card>
      {props.icon}
      <Heading.Component 
        variant='h3'
        bold
      >
        {props.title}
      </Heading.Component>
      <Text.Component>{props.message}</Text.Component>
    </Styles.Card>
  )
}

export const Component = Card